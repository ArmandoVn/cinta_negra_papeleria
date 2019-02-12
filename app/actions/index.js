const userActions =  require("./userActions")
const productActions = require("./productActions")
const orderActions = require("./orderActions")
const authActions = require("./authActions")

module.exports = {
	...userActions,
	...productActions,
	...orderActions,
	...authActions
};