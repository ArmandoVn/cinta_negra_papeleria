const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    fist_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
	},
	alias: {
		type: String,
		require: true,
		unique: true
	},
    email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	image_location: {
		type: String,
		required: true,
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