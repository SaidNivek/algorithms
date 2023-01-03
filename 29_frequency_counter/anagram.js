function validAnagram(word1, word2) {
    // If the words are not the same length, they cannot be anagrams
    if (word1.length !== word2.length) {
        return false
    }
    
    // Set up 2 objects to hold the letters if the 2 words given are the same length
    let counter1 = {}
    let counter2 = {}

    // Separate the letters in word1 into key:value pairs
    // key = the letter
    // value = number of times the letter is in the word
    for (let val of word1) {
        // This will check to see if the key (letter) is in counter already or not
        // If it is, the or statement will fizzle, using the value for that letter stored in the object
        // If it is not, then it will use 0 as the value
        // Finally, it will add 1 to whatever that value for the letter is
        counter1[val] = (counter1[val] || 0) + 1
    }

    // Repeat what we did for word1 with word2
    for (let val of word2) {
        counter2[val] = (counter2[val] || 0) + 1
    }
    
    // Check to see if the keys in counter 1 are also held within counter 2
    // If all of the keys do not have a corresponding match in counter2, the words are NOT anagrams
    for (let key in counter1) {
        if (!(key in counter2)) {
            return false
        }
        // If all keys exist in both counters, check to see if the values of the letters all match
        // If the values (times letter is in a word) of the keys (letters) do not match, then the words are NOT anagrams
        if (counter2[key] !== counter1[key]) {
            return false
        }
    }
    //If all of the above if statements do not return false, then the words are anagrams and it is true
    return true
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))