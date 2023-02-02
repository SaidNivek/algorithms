function countUniqueValues(arr) {
    let unique = 1
    let left = 0
    let right = 1
    // If the array has no length, there are no unique numbers
    if(arr.length === 0) {
      return 0
      // If the array length is 1, then there is always going to be one unique number
    } else if (arr.length === 1) {
      return unique
    }
    // If the array is longer than 1, then we need to compare the values, starting from the beginning and moving to the end
    // This will end the loop when the right value increments outside of the array's length
    while(right < arr.length) {
      // Compare the two positions and figure out what to do next
      // If they're the same, move the right pointer up one and check again
      if(arr[left] === arr[right]) {
        right++
        // If they're not the same, increment the unique value up
        // If they're not the same, move the left pointer up where the right pointer CURRENTLY is, to start the comparison from this point
        // If they're not the same, increment right up one to continue going through the loop
      } else if (arr[left] !== arr[right]) {
        unique++
        left = right
        right++
      }
    }
    // After the function completes, return the value held in unique
    return unique
  }
  
  console.log(countUniqueValues([1,1,1,1,1,2]))
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
  console.log(countUniqueValues([]))
  console.log(countUniqueValues([-2,-1,-1,0,1]))