var dollarAmount = require('./module_2');

var usdAmount = function() {
    dollarAmount.dollarNum();
    return usdAmount;
}

var balance = function(){
    return "Account balance: \n"
}

exports.usdAmount = usdAmount;
exports.balance = balance;