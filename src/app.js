const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

require('dotenv').config();

class App {
	constructor() {
		this.server = express();

		mongoose.connect(process.env.MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(cors({ origin: process.env.ORIGIN_URL }));
		this.server.use(express.json());
	}

	routes() {
		this.server.use(routes);
	}
}

module.exports = new App().server;
