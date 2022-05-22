const removeFromArray = function(arr, ...arg) {
    let indexArgToRemove = arr.indexOf(...arg)
    arr.splice(indexArgToRemove, 1)
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
