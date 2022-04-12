const express = require('express');
const cors = require('cors');
const routes = require('./Routes/routes');
const app = express();
const port = process.env.PORT || 4000;
const swaggerIU = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
	definition: {
		openapi: '3.0.1',
		info: {
			title: 'Chat Rauqoz',
			description: 'Documentation',
			version: '1.0.0'
		},
		servers: [
			{
				url: 'http://localhost:4000'
			}
		]
	},
	apis: [ './Routes/routes.js' ] // files containing annotations as above
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes);
app.use('/api-doc', swaggerIU.serve, swaggerIU.setup(swaggerJsdoc(options)));

const server = app.listen(port, (err) => {
	if (err) {
		throw err;
	}
	console.log(`server on port ${port}`);
});

const io = require('./events/socket').listen(server);
