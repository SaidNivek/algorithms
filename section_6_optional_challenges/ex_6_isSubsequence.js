function isSubsequence(str1, str2) {
    // If string 1 is larger than string 2, return false
        if (str1.length > str2.length)  {
            return false
        }
    // Set str1 pointer to first letter in the 1st string
    let pointer1 = 0
    // Set str2 point to first letter in the 2nd string
    let pointer2 = 0
    // While pointer is less than str2.length, compare the numbers
    while(pointer2 < str2.length) {
        if(str2[pointer2] === str1[pointer1]) pointer1++
        if (pointer1 === str1.length) return true
        pointer2++
    }
    return false   
  }

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)