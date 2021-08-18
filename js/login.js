//submit button call 
document.getElementById('login-button').addEventListener("click",function(){
    //call the password input item
   const passwordText= document.getElementById('login-pass');
   //read the password value
   const password=passwordText.value;

   //call the email input item
    const emailText= document.getElementById('login-email');
    const email=emailText.value;

    if (email=='meherab@baap.com' && password =='12345') {
        window.location.href = "banking.html";
    }
   
})