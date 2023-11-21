function validate() {
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;
	var creditnumber = document.getElementById("creditnumber").value;
	var delivery = document.getElementById("deli").checked;
	var pickup = document.getElementById("pickup").checked;
	var paypickup = document.getElementById("paypickup").checked;
	var payonline = document.getElementById("payonline").checked;

	var errMsg = "";					/* stores the error message */
    var result = true;					/* assumes no errors */

	/* Check that none of the required input fields are blank */
	if ((delivery == "")&&(pickup == "")) {
		errMsg += "An order type must be selected.\n";
	}
	if (contact == "") {
		errMsg += "Contact number cannot be empty.\n";
	}

	 // Check email
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}    
    if (email.indexOf('@') == 0 ) { 
        errMsg += "Email Address cannot start with an @ symbol.\n"; 
    } 
    if (email.indexOf('@') < 0 ) { //Check if email contains an @ symbol  
        errMsg += "Email Address must contain an @ symbol.\n"; 
    } 

	if ((paypickup == "")&&(payonline == "")) {
		errMsg += "A payment method must be selected.\n";
	}

	
// Based on the type of credit card, limit the length of the credit card number
	// 16 digits for Visa
	if ((document.getElementById("visa").checked) && (creditnumber.length!=16)) {
		errMsg += "Visa card number has to be 16-digit.\n";
	}	
	// 16 digits for MasterCard
	if ((document.getElementById("master").checked)&&(creditnumber.length!=16)) { 
		errMsg += "Mastercard number has to be 16-digit.\n";
	}

	// 15 digits for American Express
	if ((document.getElementById("american").checked)&&(creditnumber.length!=15)) { 
		errMsg += "American Express card number has to be 15-digit.\n";
	}
	
	/* Display error message */	
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

function init () {
	var order = document.getElementById("order");		
	order.onsubmit = validate;	
}
window.onload = init;  

/* When this checkbox is checked, the fields for billing address will be filled with the delivery address automatically */ 
function addressFunction() {
	var billingAddress = document.getElementById('billadd');
	if (document.getElementById("same").checked) {
		billingAddress.value = document.getElementById("deliadd").value;		
	}
	else { 
		billingAddress.value = "";
	}
}
window.onchange = addressFunction; /* execute the initialisation function once the window*/ 

function takeOrder() {
	var address = document.getElementById('delivery');
	if (document.getElementById('deli').checked) {
		address.style.display = 'block';
	}
	else address.style.display = 'none';
}


function payOnLine() { 	
	var credit = document.getElementById('credit-card');
	if (document.getElementById('payonline').checked) {
		credit.style.display = 'block';
	} 
	else credit.style.display = 'none';
}

// When the checkbox is checked, the fields for
// billing address will be filled with the delivery address automatically
function copy(event) {   
var deliadd = document.getElementById("deliadd");
var billadd = document.getElementById("billadd");
var checked = document.getElementById("same").checked;
if (checked) {
	if (deliadd.value) {
		billadd.value = deliadd.value;
	} 
	else { //If the delivery address is not completed when this checkbox is checked
		alert('Please enter your delivery address first.');
		event.preventDefault();
	}	
}
}

window.onchange = takeOrder(); 
window.onchange = payOnLine();
window.onchange = copy();