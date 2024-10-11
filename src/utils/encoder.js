// app/utils/encoder.js
const charset =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function encode(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }

  // Convert the hash to a positive number and create an encoded string
  let num = Math.abs(hash);
  let encodedStr = "";
  const base = charset.length;
  while (encodedStr.length < 6 && num > 0) {
    encodedStr = charset[num % base] + encodedStr;
    num = Math.floor(num / base);
  }

  // If the string is shorter than 6 characters, pad it randomly
  while (encodedStr.length < 6) {
    encodedStr = charset[Math.floor(Math.random() * base)] + encodedStr;
  }

  return encodedStr;
}

 