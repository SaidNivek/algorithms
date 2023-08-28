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
            if(i === arr.length - 1) {
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

// // LEGACY VERSION (non ES2015 syntax)
// function sselectionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             //SWAP!
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }

// // ES2015 VERSION
// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }

//   return arr;
// }

// selectionSort([0,2,34,22,10,19,17]);
