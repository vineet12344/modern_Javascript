var countdownElement = document.getElementById('number_div');


var initinalCountdownValue = countdownElement.innerHTML;

setInterval(function () {
    
    initinalCountdownValue = initinalCountdownValue>0?initinalCountdownValue -1 : 0;

    countdownElement.innerHTML = initinalCountdownValue ;
    console.log("Interval Running")

    if(initinalCountdownValue.innerHTML === 0){
        stop();
    }

}, 1000);

