function countUniqueValues(arr) {
    let unique = 1
    let left = 0
    let right = 1

    if (arr.length === 0) {
        return 0
    }

    if (arr.length === 1) {
        return unique
    }
    
    while (right < arr.length) {
        if (arr[left] === arr[right]) {
            right++
        }
        if (arr[left] !== arr[right]) {
            unique ++
            left = right
            right++
        }
    }
    return unique
}
  
  console.log(countUniqueValues([1,1,1,1,1,2]))
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
  console.log(countUniqueValues([]))
  console.log(countUniqueValues([-2,-1,-1,0,1]))