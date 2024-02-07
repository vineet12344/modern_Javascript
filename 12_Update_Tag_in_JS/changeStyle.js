
var countdownElement = document.getElementById("countdown");

var initinalCountdownValue = countdownElement.innerHTML;
var bg_img = document.querySelector("body");

var interval =  setInterval(function(){
    initinalCountdownValue = initinalCountdownValue > 0 ? initinalCountdownValue -1 : 0;
    countdownElement.innerHTML = initinalCountdownValue;

    countdownElement.style.fontSize = initinalCountdownValue * 100 + "px"
    bg_img.style.backgroundSize = initinalCountdownValue * 10 + "%";

    if(initinalCountdownValue<=0){
        clearInterval(interval)
    }
},1000)