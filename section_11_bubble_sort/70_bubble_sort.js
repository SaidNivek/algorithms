function bubbleSort(arr) {
    // Create a variable that will hold true or false if a number has been swapped in this cycle
    let swapped
    // Always need to enter the loop at least once, so do this loop while swapped = true
    // We will exit the loop when swapped = false
    // Set a variable to reduce the number of array values we need to iterate through each time through the loop
    let count = 0
    do {
        // Set swapped to false every time we restart the do/while loop
        swapped = false
        // Iterate through the array and compare the numbers in arr[i] and arr[i + 1]
        // We can reduce the number of iterations by the count, since we know the bubble will put the highest number at the end the first time through, etc.
        // Will make it go a little faster by removing the end of the array each time
        for (let i = 0; i < arr.length - count; i++) {            
            if (arr[i] > arr[i + 1]) {
                // If arr[i] is larger than arr[i+1], we create a temp variable and swap their position and move on to the next value in the array
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                // Set swapped to true if we swap any numbers so we continue again through the sorting
                // If the condition is not met, then swapped stays false and we exit to the do/while loop
                swapped = true
            }
        }
        // Increment the count up so we don't need to go through as many numbers the next time through the loop
        count++
    } while (swapped)
    // Return the array once swapped = false, which means no numbers were swapped in the loop
    return arr
}


const anArray = [15, 2, 90, 87, 40, 36, 28, 11, 80, 70, 20, 22, 19]
console.log(bubbleSort(anArray))