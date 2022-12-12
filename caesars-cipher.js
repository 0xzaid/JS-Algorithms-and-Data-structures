function rot13(str) {
  // create an array of characters to decode
  const chars = str.split('');

  // create an array of decoded characters
  const decoded = chars.map(char => {
    // get the Unicode code for the character
    const code = char.charCodeAt(0);

    // check if the character is alphabetic
    if (code >= 65 && code <= 90) {
      // shift the character 13 places
      return String.fromCharCode((code - 65 + 13) % 26 + 65);
    } else {
      // return the character as-is
      return char;
    }
  });

  // join the decoded characters and return the result
  return decoded.join('');
}

rot13('SERR PBQR PNZC'); // returns 'FREE CODE CAMP'
rot13('SERR CVMMN!'); // returns 'FREE PIZZA!'
rot13('SERR YBIR?'); // returns 'FREE LOVE?'
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'); // returns 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
