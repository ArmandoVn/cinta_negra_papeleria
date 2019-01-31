const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {

	dev: {
		SECRET_KEY: "pilin",
		db: {
			url: "mongodb://localhost/stationary"
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