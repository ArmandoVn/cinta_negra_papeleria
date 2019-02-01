const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {

	dev: {
		SECRET_KEY: "pilin",
		db: {
			url: "mongodb://Armando:1Vnarmando@ds219055.mlab.com:19055/stationary"
		},
		port: 3000
	},

	test: {
		SECRET_KEY: "pilin2",
		db: {
			url: "mongodb://localhost/stationary2"
		},
		port: 4000
	},

	production: {

	}
};

module.exports = ENVS[NODE_ENV];

// To connect with a local database just need replace url with the localhost addres