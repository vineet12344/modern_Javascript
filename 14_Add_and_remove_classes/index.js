var paragraph = document.getElementById('fontSomething');
let button = document.getElementById("btn");



button.addEventListener("click",()=>{
    paragraph.classList.toggle('big');
})


setTimeout(function(){
    paragraph.classList.remove('big');
},1500);