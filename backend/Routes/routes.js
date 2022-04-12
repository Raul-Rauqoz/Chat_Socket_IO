const routes = require('express').Router();
const all_messages = require('../messages/messages');

routes.get('/', (req, res) => {
	res.status(200).send({ data: true });
});

routes.get('/messages', (req, res) => {
	res.status(200).send(all_messages);
});
routes.post('/add_message', (req, res) => {
	res.status(200).send();
});

module.exports = routes;
