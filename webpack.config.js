var NODE_ENV = process.env.NODE_ENV;
console.log("Building in "+NODE_ENV+" mode...")
if(NODE_ENV==="development"){
	module.exports = require("./config/webpack.dev.js");
}
else if(NODE_ENV==="production"){
	module.exports = require("./config/webpack.prod.js");
}
