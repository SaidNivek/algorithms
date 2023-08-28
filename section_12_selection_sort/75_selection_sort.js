function selectionSort(arr) {
    // Start a loop and keep track of the current position in the array and position of the lowest number found
    let current = 0
    let lowest = 0
    // Set a swapped value to false that will allow us to exit the loop earlier if there are no swaps
    let swapped = false
    do {
        swapped = false
        for(let i = current; i < arr.length; i++) {
            console.log(current, lowest, arr[lowest])
            if(arr[i] < arr[lowest]) {
                lowest = i
                swapped = true
            }
            if(i === arr.length - 1 && swapped) {
                let temp = arr.splice(lowest, 1)
                arr.splice(current, 0, temp[0])                
                current++
                lowest = current + 1
            }
        }
    } while (swapped)
    return arr
}

const anArray = [15, 2, 90, 87, 40, 36, 28, 11, 80, 70, 20, 22, 19]
console.log(selectionSort(anArray))
console.log(selectionSort([1,2,3]))
