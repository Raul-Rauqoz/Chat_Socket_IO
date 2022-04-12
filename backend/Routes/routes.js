const routes = require('express').Router();
const all_messages = require('../messages/messages');

routes.get('/', (req, res) => {
	res.status(200).send(true);
});

/**
* @swagger
*components:
*  schemas:
*    Message:
*      type: object
*      properties:
*        nick:
*          type: string
*          description: nick del usuario
*        message:
*          type: string
*          description: mensaje del usuario
*      example:
*        nick: Raul
*        message: Hola
*/

/** 
* @swagger
*paths:
*  /messages:
*    get:
*      tags: [Message - Get]
*      description: Obtener los mensajes
*      responses:
*        '200':
*          description: Mensajes
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Message'
*/
routes.get('/messages', (req, res) => {
	res.status(200).send(all_messages);
});

/** 
* @swagger
*paths:
*  /delete_all:
*    delete:
*      tags: [Message - Delete]
*      description: Borrar los mensajes
*      responses:
*        '200':
*          description: Mensajes Limpios
*          content:
*            application/json:
*              example: []
*/
routes.delete('/delete_all', (req, res) => {
	all_messages.splice(0, all_messages.length);
	res.status(200).send(all_messages);
});

module.exports = routes;
