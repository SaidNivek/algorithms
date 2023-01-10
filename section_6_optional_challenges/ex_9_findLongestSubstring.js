// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str){
    // Deal with outliers immediately
    if (str.length === 0) return 0
    if (str.length === 1) return 1

    let count = 1
    let maxCount = 0
    let left = 0
    let right = 1
    let counter = {}
    // Set up the counter with the first object of the first count
    counter[str[left]] = 1

    while (right < str.length ) {
        // console.log(counter)
        // console.log(count)
        counter[str[right]] = (counter[str[right]] || 0) + 1
        // If the current key: value pair has more than 1 as the value, we need to reset the window
        // If the maxCount is smaller than the current count, update maxCount
        // Reset the counter, count and the new starting position for the sliding window
        if (counter[str[right]] === 2) {
            if(maxCount < count) maxCount = count
            left++
            right = left + 1
            counter = {}
            counter[str[left]] = 1
            count = 1
        // If there are still just one in the counter, then we keep the process going, incrementing count and the right variable
        } else {
            right++
            count++
        }
    }
    // Since the while loop and the checking above ejects you when right < str.length, do some final checking for the last position of the string, to see if it's a valid part of the subArray and include that one in the return
    if (maxCount <= count) return count
    // If maxCount is not less than or equal to count, return the previousy found maxCount
    return maxCount
}

// Example code from the solution online
// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;
   
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         start = Math.max(start, seen[char]);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, i - start + 1);
//       // store the index of the next char so as to not double count
//       seen[char] = i + 1;
//     }
//     return longest;
//   }


  
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6