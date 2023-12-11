var cancion = document.getElementById('cancion');
var audioCancion = document.getElementById('audioCancion');

audioCancion.volume = 0.1;

cancion.addEventListener('mouseover', function() {
    audioCancion.play();
});

cancion.addEventListener('mouseout', function() {
    audioCancion.stop();
    audioCancion.currentTime = 0;
})

function bloquearAds() {
    document.oncontextmenu = function(){return false}
}

bloquearAds();