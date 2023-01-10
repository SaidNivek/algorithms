// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
function minSubArrayLen(arr, num) {
    let left = 0
    let right = 0
    let count = 1
    // Set the minCount to Infinity as a starter, so any amount of numbers less than Infinity will reset the minCount to that value later on
    let minCount = Infinity
    let testMinArray = arr[left]

    // If no array, return 0
    if (arr.length === 0) return 0

    if (testMinArray >= num) return 1


    while(left < arr.length && right !== arr.length) {
        // If left and right are the same value, do not add them, just set it to the value in the array
        if (left === right) {
            testMinArray = arr[left]

        } else {
            testMinArray += arr[right]
            count++
        }
        // Test to see if the current value is larger than the num param given
        if (testMinArray >= num) {
            if (minCount > count) minCount = count
            left++
            right = left
            count = 1
        // If testMinArray is not larger than num, increment right by 1
        } else (right++)

    }
    // If mincount is still Infinity, it has never reached the num param, so return 0
    if (minCount === Infinity) return 0
    // If the minCount is NOT Infinity, return the minCount, as it HAS reached the num param
    return minCount
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0