function stringSearch(string, search) {
    let count = 0
    // Get the length of the second string
    let searchNum = search.length
    
    let start = 0
    let check = 0
    // For loop only needs to go up to string.length - searchNum beacause if the string is less than the length of the search, then it cannot be a match
    // While the starting position is less than the length of the string minus the length of the search trm, go through the first string
    while (start < string.length - searchNum) {
        for(let i = start; i < start + searchNum; i++) {
            // Check to see if the characters in the current first position match the current letter of the search string
            // If the string has a match, then we iterate the count up and reset the first position to the next char in the string
            if(string[i] === search[check]) check++
            // If they don't match, then we reset to the next char in the string
            else {
                check = 0
                start++
                break
            }
            // If the check is equal to the searchNum value, then we have found a match and can iterate the count up.
            if(check === searchNum) {
                count++
                start++
            }
        }
    }
    return count
}

console.log(stringSearch('cherries', 'snow'))