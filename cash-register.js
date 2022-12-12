/* attempts to determine the optimal combination of currencies to return as change */
function checkCashRegister(price, cash, cid) {
    // calculate the change due
    let change = cash - price;

    // calculate the total amount in the cash register
    let cidTotal = cid.reduce((acc, cur) => acc + cur[1], 0);

    // define the different currency units and their values
    let currencyUnits = [["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
    ];

    // check if there is enough money in the register to give the required change
    if (change > cidTotal) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
        // If the amount of change due is exactly equal to the total amount of cash in the register, 
        // return "CLOSED" and the original contents of the register
    } else if (change === cidTotal) {
        return { status: "CLOSED", change: cid };
        // Otherwise, calculate the change due and return "OPEN"
    } else {
        let changeDue = [];
        let changeRemaining = change;

        // loop through curreny units
        for (let i = 0; i < currencyUnits.length; i++) {
            // destructure the unit name and value from the current currency unit
            let [unitName, unitValue] = currencyUnits[i];
            // find the currency unit in the register with the same name as the current unit we are iterating over
            let cidUnit = cid.find(x => x[0] === unitName);
            // if the currency unit exists and there is still change remaining to be given
            if (cidUnit && changeRemaining >= unitValue) {
                // initialize the amount of this currency unit we will give as change
                let amount = 0;
                // while we still have enough change remaining to give and there is 
                // still enough of this currency unit in the register
                while (changeRemaining >= unitValue && cidUnit[1] >= unitValue) {
                    // subtract the value of this currency unit from the change remaining
                    changeRemaining -= unitValue;
                    // round the change remaining to two decimal places
                    changeRemaining = Math.round(changeRemaining * 100) / 100;
                    // subtract the value of this currency unit from the amount 
                    // of this currency unit in the register
                    cidUnit[1] -= unitValue;
                    // add the value of this currency unit to the total amount 
                    // of this currency unit we will give as change
                    amount += unitValue;
                }
                // add this currency unit and the amount we will give as change to the array of change due
                changeDue.push([unitName, amount]);
            }
        }
        // if there is still change remaining after iterating over all of the currency units
        if (changeRemaining > 0) {
            // return "INSUFFICIENT_FUNDS" and an empty array of change
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        } else {
            // otherwise, return "OPEN" and the array of change due
            return { status: "OPEN", change: changeDue };
        }
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);