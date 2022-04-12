const routes = require('express').Router();
const all_messages = require('../messages/messages');

routes.get('/', (req, res) => {
	res.status(200).send({ data: true });
});

routes.get('/messages', (req, res) => {
	res.status(200).send(all_messages);
});
routes.delete('/delete_all', (req, res) => {
	all_messages.splice(0, all_messages.length);
	res.status(200).send(all_messages);
});

module.exports = routes;
