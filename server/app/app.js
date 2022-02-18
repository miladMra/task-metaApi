const express = require('express');

const app = express();
const port  = process.env.APP_PORT || 5000

require('../middleware')(app);
require('./routes')(app)
const startApp = () => {

    app.listen(port, () => {
        console.log('app is running ...');
    });

}

module.exports = startApp;