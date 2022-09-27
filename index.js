const info = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
	text: `Hello, my name is ${info.firstName} and my campus is ${info.campus}`,
	e: "oO",
	T: "U "
}));


