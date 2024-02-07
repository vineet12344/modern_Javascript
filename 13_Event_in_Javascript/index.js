var button = document.getElementById("btn-click");
var background = document.querySelector("body");


console.log(background)


function onBtnClick(){
    var num1 = Math.floor(Math.random() * 256);
    var num2 = Math.floor(Math.random() * 256);
    var num3 = Math.floor(Math.random() * 256);

    
    background.style.backgroundColor = "rgb(" + num1 + "," + num2+ "," + num3 +  ")";
    button.style.color = 'white'
}

// button.onclick = onBtnClick

button.addEventListener("click",onBtnClick);


