const express = require('express');
const cors = require('cors');
const routes = require('./Routes/routes');
const routes2 = require('./events/socket');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes);

const server = app.listen(port, (err) => {
	if (err) {
		throw err;
	}
	console.log(`server on port ${port}`);
});

const io = require('./events/socket').listen(server);
