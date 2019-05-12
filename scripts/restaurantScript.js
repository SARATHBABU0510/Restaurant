function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactus"].elements.length; 
        loopCounter++) {
        if (document.forms["contactus"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {            
            document.forms["contactus"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["contactus"]["name"].value = "";
    document.forms["contactus"]["email"].value = "";
	document.forms["contactus"]["phone"].value = "";
	document.forms["contactus"]["reason"].value = "";
	document.forms["contactus"]["info"].value = "";
	document.forms["contactus"]["choice2"].value = "";
	document.forms["contactus"]["T"].value = "";
	document.forms["contactus"]["W"].value = "";
	document.forms["contactus"]["Th"].value = "";
	document.forms["contactus"]["F"].value = "";
	
    document.getElementById("submitButton").innerText = "Send Request";
    document.forms["contactus"]["name"].focus();
}

function validateForm() {    
    
	var name_valid_letters = /^[a-zA-Z ]+$/;
	var email_valid_letters = /^[0-9a-zA-Z@.]+$/;
	var phone_valid_letters = /^[0-9]+$/;
    		
    if (document.forms["contactus"]["name"].value.trim() == "") {
        alert("Name must be filled in with alphabets.");
        document.forms["contactus"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactus"]["name"].focus();
        return false;
    }
	
	if (!document.forms["contactus"]["name"].value.match(name_valid_letters)) {	
		alert("Name must be filled in with alphabets.");
        document.forms["contactus"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactus"]["name"].focus();
		return false;
	}	
	
	if (document.forms["contactus"]["email"].value.trim() == "") {
        alert("Email must be filled in with valid characters.");
        document.forms["contactus"]["email"]
           .parentElement.className = "form-group has-error";
        document.forms["contactus"]["email"].focus();
        return false;
    }
	
	if (!document.forms["contactus"]["email"].value.match(email_valid_letters)) {	
        alert("Email must be filled in with valid characters.");
        document.forms["contactus"]["email"]
           .parentElement.className = "form-group has-error";
        document.forms["contactus"]["email"].focus();
        return false;
    }
	
	if (document.forms["contactus"]["phone"].value.trim() == "") {
        alert("Phone must be filled in with a number.");
        document.forms["contactus"]["phone"]
           .parentElement.className = "form-group has-error";
        document.forms["contactus"]["phone"].focus();
        return false;
    }
	
	if (isNaN(document.forms["contactus"]["phone"].value)) {
        alert("Phone must be filled in with a number.");
        document.forms["contactus"]["phone"]
           .parentElement.className = "form-group has-error";
        document.forms["contactus"]["phone"].focus();
        return false;
    }
		
	alert("Entered information is validated successfully!"); return false;
}

