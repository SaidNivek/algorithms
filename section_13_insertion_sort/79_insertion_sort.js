function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(i === 1) {
            if(arr[i] < arr[i - 1]) {
                const temp = arr.splice(i, 1)[0]
                arr.splice(0, 0, temp)
            }
        } else {
            if(arr[i] < arr[i - 1]) {
                for(let j = 0; j < i; j++) {
                    if(arr[i] < arr[j]) {
                        const temp = arr.splice(i, 1)[0]
                        arr.splice(j, 0, temp)
                    }
                }
            }
        }

    }
    return arr
}

const anArray = [15, 2, 90, 87, 40, 36, 28, 11, 80, 70, 20, 22, 19]
console.log(insertionSort(anArray))
console.log(insertionSort([1,2,3]))

// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])