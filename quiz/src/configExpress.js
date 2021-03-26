const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const routes = require('../routes/index.js');
const app = express();

module.exports = app => {
    //config
    app.set('port',process.env.PORT || 8081);
    //middlewares
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());  
    app.use(cors());
    //routes
    routes(app);
    return app;
}

