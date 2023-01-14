// All recursive functions need two things:
// 1 - the base case - the condition where the recursion ends and stops calling itself
// 2 - Different input - basically the recursive call that uses a DIFFERENT piece of data because it needs to change in order for the base case to be met

function countDown(num) {
    if(num <= 0) {
        console.log("All done!")
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(10)