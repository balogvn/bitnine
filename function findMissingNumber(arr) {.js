function findMissingNumber(arr) {
    // Calculate the expected sum of the first 45 numbers using the formula n * (n + 1) / 2
    const expectedSum = (45 * (45 + 1)) / 2;
  
    // Calculate the actual sum of the given array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
    // Find the missing number by taking the difference between the expected and actual sums
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, /* ... */, 44, 45]; // Array with one missing number
  const missingNumber = findMissingNumber(numbersArray);
  console.log("The missing number is:", missingNumber);
  