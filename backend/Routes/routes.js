const routes = require('express').Router();

routes.get('/', (req, res) => {
	res.status(200).send({ data: true });
});

module.exports = routes;
