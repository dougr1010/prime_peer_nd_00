

//var min = 100;
//var max = 1000000;

var randomNumber = function () {

    var num = (Math.floor(Math.random() * (1 + 1000000 - 100) + 100)).toString();

    return num;
};

module.exports = randomNumber;