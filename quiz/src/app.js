const express = require ('express');
const configExpress = require('/configExpress');
const app = configExpress(express());




app.listen(app.get('port'), () => {
	console.log('Server on Port ', app.get('port'))
});