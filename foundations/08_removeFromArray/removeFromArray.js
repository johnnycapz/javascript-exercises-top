const removeFromArray = function(array, ...args) {
    function isInArray(item) {
        if (!args.includes(item)) {
            return item;
        }
    } 
    const filtered = array.filter(isInArray);
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
