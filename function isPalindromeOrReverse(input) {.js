function isPalindromeOrReverse(input) {
    // Remove any spaces and convert the input to lowercase for case-insensitivity
    const cleanedInput = input.replace(/\s/g, '').toLowerCase();
    
    // Check if the cleaned input is a palindrome
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    
    if (isPalindrome) {
      return `${input} is a palindrome.`;
    } else {
      // If it's not a palindrome, return it in reverse order
      const reversedInput = input.split('').reverse().join('');
      return `Reversed order: ${reversedInput}`;
    }
  }
  
  // Example usage:
  const userInput = prompt("Enter a word:");
  const result = isPalindromeOrReverse(userInput);
  console.log(result);
  