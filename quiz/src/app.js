const express = require ('express');
const configExpress = require('./configExpress');
const app = configExpress(express());

//mongodb conection
const mongodbConnect = require('./mongooseConnect');
const db = mongodbConnect.connect();

app.set('views', '../views');
app.set('view engine', 'pug');

app.listen(app.get('port'), () => {
	console.log('Server on Port ', app.get('port'))
});