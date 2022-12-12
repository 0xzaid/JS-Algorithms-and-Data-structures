/*
^ - This matches the start of the string. This is important because it ensures that the regex will only match the entire string, and not just a substring.

(1\s?)? - This matches an optional "1" at the start of the string, followed by an optional space. This allows for the possibility of the string starting with "1", for example "1 (123) 456-7890".

(\(\d{3}\)|\d{3}) - This matches either a 3-digit number enclosed in parentheses, or a 3-digit number without parentheses. This allows for either of the following formats: (123) or 123.

[\s\-]? - This matches an optional space or dash. This allows for the possibility of a space or dash between the 3-digit number and the next group of digits.

\d{3} - This matches exactly 3 digits. This matches the next group of digits in the telephone number.

[\s\-]? - This again matches an optional space or dash. This allows for the possibility of a space or dash between the 3-digit number and the next group of digits.

\d{4} - This matches exactly 4 digits. This matches the last group of digits in the telephone number.

$ - This matches the end of the string. This is important because it ensures that the regex will only match the entire string, and not just a substring

*/

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");
