function factorial(num) {
    let total = 1
    for (i = num; i > 1; i--) {
        total *=i
    }
    return total
}

console.log(factorial(4))