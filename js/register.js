function validate() {
    var uname = document.getElementById("uname").value;
    var genm = document.getElementById("genm").checked; 
    var genf = document.getElementById("genf").checked; 
    var age = document.getElementById("age").value;

    var mixed_icecream = document.getElementById("mixed-icecream").checked; 
    var strawberry = document.getElementById("strawberry").checked; 
    var chocolate_chip = document.getElementById("chocolate-chip").checked; 
    var teaberry = document.getElementById("teaberry").checked; 

    var postcode = document.getElementById("postcode").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    var useremail = document.getElementById("useremail").value;

    var errMsg = "";					/* stores the error message */
    var result = true;					/* assumes no errors */
    
    /* Check that none of the required input fields are blank */
    if (uname == "") { //Check user name
        errMsg += "User name cannot be empty.\n"; 
    } 

    if ((genm == "")&&(genf == "")) {  //Check gender (Must choose 1)
        errMsg += "Your gender must be selected.\n"; 
    } 

    if (age == "") { //Check age (Must choose 1)
        errMsg += "Your age must be selected.\n"; 
    }

    if ((mixed_icecream == "")&&(strawberry == "")&&(chocolate_chip == "")&&(teaberry == "")) { //Check ice-cream
        errMsg += "Your favorite ice-cream must be selected.\n"; 
    } 

    if (! postcode.match (/^(?=.*\d).{4}$/)) {  //check that the postcode is 4-digit
        errMsg += "Postcode has to be 4-digit.\n";
    }

    // Check email
    if (useremail == "") { 
        errMsg += "Email Address cannot be empty.\n"; 
    } 
        
    if (useremail.indexOf('@') == 0 ) { 
        errMsg += "Email Address cannot start with an @ symbol.\n"; 
    } 
    if (useremail.indexOf('@') < 0 ) { //Check if email contains an @ symbol  
        errMsg += "Email Address must contain an @ symbol.\n"; 
    } 
    
    //Check Password
    if (pwd1.length < 9) { //check that the password is at least 9-character long;
        errMsg += "Password has to be at least 9 characters long.\n";
    }
    
    if (pwd2 == "") { 
        errMsg += "Retype password cannot be empty.\n"; 
    } 
    if (pwd1 != pwd2) { //Check if password and retype password are the same
        errMsg += "Passwords do not match.\n";
    }
    
    /* Display error message */
    if (errMsg != "") {
        alert (errMsg);
        result = false;
    } 
    return result;
}

/* link HTML elements to corresponding event function */
function init () {
    var regForm = document.getElementById("register-form");
    regForm.onsubmit = validate;
}

window.onload = init;