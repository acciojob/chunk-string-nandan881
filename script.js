function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase to perform case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf to find the first occurrence
  return lowerStr.indexOf(lowerSubStr);
}

function chunkString(str, chunkLength) {
  const result = [];
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.substring(i, i + chunkLength));
  }
  return result;
}

// Examples for indexOfIgnoreCase
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));          // Output: -1

// Examples for chunkString
console.log(chunkString("Hello, world!", 5)); // Output: ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // Output: ["12", "34", "5"]
console.log(chunkString("abc", 5));          // Output: ["abc"]
