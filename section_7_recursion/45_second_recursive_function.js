function sumRange(num) {
    // Base case below
    if(num === 1) return 1
    // Recursive call below, reducing the num by 1 and calling sumRange again
    return num + sumRange(num-1)    
}

console.log(sumRange(4))