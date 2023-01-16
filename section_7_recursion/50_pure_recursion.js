// This function does the same as 49_helper_method_recursion, except it uses pure recursion and no helper method inside of the larger function
// It is a little more complex, but also a viable way of doing it
function collectOddValues(arr){
    // Define the variable new array, which happens each time through and resets to empty each time the function is called
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    // This concatenates ALL of the arrays into a newArr and then return that at the very end
    // Because of the stack, the call here is waiting on returns from the recursive call, which will then concat them all together into the final newArr array, which is then returned    
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5]))