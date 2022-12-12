function convertToRoman(num) {
  let result = '';

  // array for all Roman numbers
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // array for all values 
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for(let i=0;i<values.length;i++) {
    // get number of times decimal value goes into the number
    const times = Math.floor(num/values[i]);

    // add its roman character to the result n times
    result += symbols[i].repeat(times)

    // subtract deciaml value from number
    num -= times * values[i]
  }
  return result
}

convertToRoman(36);
convertToRoman(1); // returns 'I'
convertToRoman(4); // returns 'IV'
convertToRoman(9); // returns 'IX'
convertToRoman(14); // returns 'XIV'
convertToRoman(46); // returns 'XLVI'
convertToRoman(99); // returns 'XCIX'
convertToRoman(999); // returns 'CMXCIX'
convertToRoman(3999); // returns 'MMMCMXCIX'
