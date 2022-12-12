function palindrome(str) {
  // remove all non-alphanumeric characters
  str = str.replace(/[^a-z0-9]/gi, '');

  // make the string lowercase
  str = str.toLowerCase();

  // reverse the string
  let reversedStr = str.split('').reverse().join('');

  // check if the string is a palindrome
  return str === reversedStr;
}

palindrome("eye");
