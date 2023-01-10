function isSubsequence(str1, str2) {
    // If string 1 is larger than string 2, return false
        if (str1.length > str2.length)  {
            return false
        }
    // Set str1 pointer to first letter in the 1st string
    let pointer1 = 0
    // Set str2 point to first letter in the 2nd string
    let pointer2 = 0
    // While pointer2 is less than str2.length, compare the numbers
    while(pointer2 < str2.length) {
        // If the value at str2[pointer2] is equal to the value at str1[pointer1], increment pointer1 up by 1
        if(str2[pointer2] === str1[pointer1]) pointer1++
        // If pointer1 is ever the same number as str1.length, return true immediately, since we have passed beyond the string and, therefore, all values have been matched in order
        if (pointer1 === str1.length) return true
        // Increment pointer2 every time through, to eventually fulfill the while condition
        pointer2++
    }
    // If the while condition is escaped from, return false, since the true condition was never met
    return false   
  }

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)