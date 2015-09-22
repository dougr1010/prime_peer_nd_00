var firstMod = require('./module_1');



var dollarNum = function() {
    var returnVal = "dollarsign" + firstMod.randomNumber();
    console.log(returnVal);
    return returnVal
}

module.exports = dollarNum;