const userActions =  require("./userActions")
const productActions = require("./productActions")
const orderActions = require("./orderActions")

module.exports = {
	...userActions,
	...productActions,
	...orderActions
};