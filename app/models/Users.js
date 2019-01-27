const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    fist_name: {
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
	image_location: {
		type: String,
		unique: true
	},
	birth_date: {
		type: Date
	},
	gender: {
		type: String,
		enum: ["MALE", "FEMALE"]
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

UserSchema.pre("save", function (next) {
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

module.exports = mongoose.model("usersp", UserSchema);