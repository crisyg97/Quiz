//temporizador
var start = Date.now();
setInterval(() => {
    var timeInitial = Date.now() - start;
    var timeConverted = convertTime(timeInitial);
    document.getElementById('clock').innerHTML = '' + timeConverted;
}, 1000);

function convertTime(miliseconds){
    var totalSeconds = Math.floor(miliseconds / 1000);
    var calculoMins = Math.floor(totalSeconds/60);
    var calculoSeconds = totalSeconds - (calculoMins * 60);
    return calculoMins + ":" + calculoSeconds;
}