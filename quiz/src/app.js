const express = require ('express');
const configExpress = require('./configExpress');
const app = configExpress(express());
const bodyParser = require('body-parser');

//mongodb conection
const mongodbConnect = require('./mongooseConnect');
const db = mongodbConnect.connect();
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', '../views');
app.set('view engine', 'pug');

app.listen(app.get('port'), () => {
	console.log('Server on Port ', app.get('port'))
});