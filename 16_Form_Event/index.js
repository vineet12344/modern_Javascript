var username = document.getElementById("username");
var login_form = document.getElementById("login-form");

username.addEventListener("change",function(e){
    var currentValue = e.target.value;
    console.log(currentValue);
    
})

username.addEventListener("focus",function(){
    console.log("Element Focused")
    
})

username.addEventListener("blur",function(){
    console.log("Element loses Focused")
    
})

login_form.addEventListener('submit',function(e){
    alert("Form Submited!");
    e.preventDefault();
})

