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

function mergeSort(arr1, arr2) {
    return mergeArrays(arr1, arr2)
}

let arr1 = [4, 8, 8, 9, 11, 12, 19, 34]
let arr2 = [1, 3, 7, 70, 74]
console.log(mergeSort(arr1, arr2))