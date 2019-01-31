const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    first_name: {
        type: String,
        required: [true, "First name is required!"]
    },
    last_name: {
        type: String
	},
	avatar_name: {
		type: String,
		require: [true,"User name is required!"],
		unique: true
	},
    email: {
		type: String,
		required: true,
		unique: [true,"Email is required!"]
	},
	password: {
		type: String,
		required: [true,"Password is required!"]
	},
	gender: {
		type: String,
		enum: ["MALE", "FEMALE"]
	},
	profile_image: {
		type: String
	},
    is_active: {
		type: Boolean,
		default: true
	},
    Liked: [
		{
			type: Schema.Types.ObjectId,
			ref: "posts"
		}
	]

}, { "collection": "users", "timestamps": true });

/*
UserSchema.pre("save", (next) => {
	let user = this;
	if (!user.isModified("password")) { return next(); }
	bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});
*/

// Here we tell mongodb that all ObjectId types will be transformed into String
mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("users", UserSchema);

/*
{
    name: "Armando",
    first_name: "Valderrama",
    last_name: "Navarro",
    avatar_name: "ArmandoVn",
    email: "hola",
    password: "123",
    gender: "MALE",
    is_active: true
}
*/