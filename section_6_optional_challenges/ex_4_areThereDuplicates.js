function areThereDuplicates(...args) {
    if (args.length < 2) {
        return false
    }
    let counter = {}

    for (let item of args) {
        counter[item] = (counter[item] || 0) +1 
    }
    for (let key in counter) {
        if (counter[key] > 1) {
            return true
        }
    }
    return false
  }


console.log(areThereDuplicates(1)) // false
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 