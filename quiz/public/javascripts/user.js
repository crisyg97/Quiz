const axios = require('axios');

var btnAddUser = document.getElementById('btnAddUser');
var fornName = document.querySelector('#form-name');

formName.addEventListener("submit", async ()=> {   
    var name = document.querySelector('#nameValue');
    let data =JSON.stringify({
        name,
        'status':'ACTIVE'
    });
    console.log('datos obtenidos: ', name);
    const res = await axios.post(urlApi, data).then(res => {console.log(res)});
    console.log(res);
});