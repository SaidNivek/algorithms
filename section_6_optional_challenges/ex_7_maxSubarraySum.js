function maxSubarraySum(arr, num){
    // If num is larger than the length of the array, return null, this is impossible to add a subarray
    if(num > arr.length) return null
    let testSubarray = 0
    // Add the first numbers in the array to set the starting value of the test
    for(let i = 0; i < num; i++) {
        testSubarray += arr[i]
    }
    // Set the maxSubarray to the starting test value, acquired above
    let maxSubarray = testSubarray
    
    // Go through the array, setting the first position to the value of num (since we already have the first two digits above)
    for(let i = num; i < arr.length; i++) {
        // Set the testSubarray variable by subtracting the first number in the current test (arr[i - num])
        // Then, add the next number in the array (arr[i])
        testSubarray = testSubarray - arr[i - num] + arr[i]
        // Check to see if the test is larger than the max and, if it is, replace the max with the new value
        maxSubarray = Math.max(testSubarray, maxSubarray)
    }
    return maxSubarray
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
console.log(maxSubarraySum([1,2,3], 3)) // 6