const removeFromArray = function(originalArray, ...args) {
    let newArray = [...originalArray];
    for (arg of args) {
        for (let i = newArray.length - 1; i >= 0; i--) {
            if (newArray[i] === arg) {
                newArray.splice(i, 1);
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
