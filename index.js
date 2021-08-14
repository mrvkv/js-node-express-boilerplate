require('dotenv').config();
require('./configurations/globals')();

const app = require('./configurations/server')();
require('./src/routes')(app);