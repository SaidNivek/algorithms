function mergeArrays(arr1, arr2) {
    let newArray = []
    let val1 = 0
    let val2 = 0

    while(val1 < arr1.length && val2 < arr2.length) {
        if (arr1[val1] <= arr2[val2]) {
            newArray.push(arr1[val1])
            val1++
        } else {
            newArray.push(arr2[val2])
            val2++
        }
        if (val1 === arr1.length) newArray = [...newArray, ...arr2.splice(val2, (arr2.length - val2))]
        if (val2 === arr2.length) newArray = [...newArray, ...arr1.splice(val1, (arr1.length - val1))]
    }

    return newArray
}

// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array
// USES RECURSION!

function mergeSort(arr1, arr2) {
    return mergeArrays(arr1, arr2)
}

let arr1 = [4, 8, 8, 9, 11, 12, 19, 34]
let arr2 = [1, 3, 7, 70, 74]
console.log(mergeSort(arr1, arr2))

// Function from the videos.
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }