function selectionSort(arr) {
    // Start a loop and keep track of the position and lowest number found
    let current = 0
    let lowest = 0
    let swapped = false
    do {
        swapped = false
        for(let i = current; i < arr.length; i++) {
            console.log(current, lowest)
            if(arr[i] < arr[lowest]) lowest = i
            if(i === arr.length - 1) {
                let temp = arr.splice(lowest, 1)
                arr.splice(current, 0, temp[0])
                swapped = true
                current++
                lowest = current
            }
        }
    } while (swapped)
    return arr
}

const anArray = [15, 2, 90, 87, 40, 36, 28, 11, 80, 70, 20, 22, 19]
console.log(selectionSort(anArray))