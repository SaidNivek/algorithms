// Helper method recursion creates an inner recursion that will allow for the collection of a group and other things, while containing all of the important variables needed for the recursion to take place successfully.

function collectOddValues(arr){
    // Define the result that will be returned at the end of the fuction
    let result = [];

    // Define the helper function that will be recursive and NOT reset the result variable every time it is run
    function helper(helperInput){
        // Base case for the recursion
        if(helperInput.length === 0) {
            return;
        }
        // Collect the odd numbers and push them into the results array
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        // Call the recursive helper function, while slicing off the first number in the array we are checking for odds, which will get us to the base case at some point
        helper(helperInput.slice(1))
    }    
    // Call the helper function the first time to get us into the recursive loop
    helper(arr)
    // Return the resut array, which will have collected all of the odd numbers within the array after the helper function finishes
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))