// Write a function that will take a string like "John Doe" and return it in lowercase with dashes "john-doe"

export function urlBuilder(str) {
  let newStr = str.trim().toLowerCase().split(" ").join("-");
  return newStr;
}
