var num1 = 14260;    // Global Varible

function loanPayment(){
    var total = num1 + 650;     // Local Varible only limited to this function
    console.log(total);     
}

{}

loanPayment();
console.log("After calling loanPayment function : " + num1);