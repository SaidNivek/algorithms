function averagePair(arr, avg){
    if (arr.length < 2) {
        return false
    }

    let left = 0
    let right = 1
    let testValue = 0

    while (left !== arr.length - 1) {
        // Add left and right values together and divide by 2
        testValue = (arr[left] + arr[right]) / 2
        // Compare to the avg given in the function call
        if (avg === testValue) {
            return true
        }

        // If incorrect, go through the array, increasing right by 1 until it hits arr.length
        right++
        // If it does, increase left by 1 and increase right to the new left value +1
        if (right === arr.length) {
            left++
            right = left + 1
        }
    }
    return false
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false