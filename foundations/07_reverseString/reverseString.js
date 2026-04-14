const reverseString = function(string) {
    let reverseArray = [];
    let newStringArray = string.split("");
    console.log(newStringArray);
    const arrayLength = newStringArray.length
    for (i=0; i < arrayLength; i++) {
         reverseArray += newStringArray.pop();
          //console.log(reverseArray);
          //console.log(newStringArray);
      } 
    //console.log(reverseArray);
    return reverseArray.toString();
};

// Do not edit below this line
module.exports = reverseString;
