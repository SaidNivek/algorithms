function validAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }

    let counter1 = {}
    let counter2 = {}

    for (let val of word1) {
        counter1[val] = (counter1[val] || 0) + 1
    }
    for (let val of word2) {
        counter2[val] = (counter2[val] || 0) + 1
    }

    for (let key in counter1) {
        if (!(key in counter2)) {
            return false
        }
        if (counter2[key] !== counter1[key]) {
            return false
        }
    }
    return true
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))