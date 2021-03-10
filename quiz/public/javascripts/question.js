//temporizador
var start = Date.now();
setInterval(() => {
    var delta = Date.now() - start;
    document.getElementById('clock').innerHTML = (Math.floor(delta / 1000));
}, 1000);