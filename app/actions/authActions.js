const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { SECRET_KEY } = require('../config')
const { createUser, getUserByEmail } = require('./userActions')

// Prototype property allows you app properties and methods to any object.
Date.prototype.addDays = (days) => {
    // .valueOf method returns the t
	const date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}

// createToken, create a single user token according to the params
const createToken = ({ email, first_name , _id}) => {
    // exp: define exprired date to user
    const exp = new Date().addDays(1).getTime();
    // jwt payload
	const payload = {
		_id,
		email,
		first_name,
		exp
    }
    // construc a jtw payload
	return jwt.sign(payload, SECRET_KEY);
}

// signup method is used to create a new user in the database
const signup = (data) => {
	return new Promise((resolve, reject) => {
		createUser(data).then(
			(user) => {
				const token = createToken(user);
				resolve(token);
			}
		).catch(reject);


	});
};

module.exports = {
	signup,
	login
};

// Delete everything in a MongoDB database:
// db.dropDatabase()

// Insert data into mongoDB
// db.inventory.insertOne()