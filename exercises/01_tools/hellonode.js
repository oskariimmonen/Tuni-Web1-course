const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);    

var hellonode = function(arr) {
	return 'hello node';
}
module.exports = hellonode 

hellonode(['moi', 'kaikki']);