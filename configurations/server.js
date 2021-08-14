const app = require('express')();
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.APP_PORT;
const host = process.env.APP_HOST || 'localhost';

module.exports = () => {
	app.use(cors());
	app.use(logger('tiny'));
	app.use(bodyParser.json());
	
	app.listen(port, host, () => logSuccess(`Server is listening on port ${port}...`));

	process.on('uncaughtException', (error) => {
		if (error.errno === 'EADDRINUSE') {
			logError('The given port is already occupied. Please provide any other port.');
		} else {
			logError(error);
		}
		process.exit(1);
	});

	return app;
}