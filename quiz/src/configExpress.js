const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express();

module.exports = app => {
    //config
    app.set('ports',process.env.PORT || 3000);
    //middlewares
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(bodyParser.json())
    //routes
    routes(app);
    return app;
}

