const repeatString = function(string, num) {
    let newString = "";
    if (num >= 0) {
        for (let i = 0; i < num;) {
            newString += string;
            i++;
        }
        
        } else {
        let errorString = "ERROR";
        return errorString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
