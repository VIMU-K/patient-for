//Author: Vimukthi Habarakada Liyanage Don
//Date created: 10/08/2024
//Date last edited: 10/19/2024
//Version: 1.1

// Date of Birth 

function validateDOB() {
    
    const dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago";
        dob.value = "";
        return false;    
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}


// Slider //

let slider = document.getElementById("range");
let output = document.getElementById("range-scale");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}


// Function to validate Address Line 1
function validateAddressLine1() {
    const addressLine1 = document.getElementById("addressline1").value;
    const addressLine1Error = document.getElementById("addressline1-error");

    if (addressLine1.length < 2 || addressLine1.length > 30) {
        addressLine1Error.textContent = "Address Line 1 must be between 2 and 30 characters.";
        return false;
    } else {
        addressLine1Error.textContent = ""; 
        return true;
    }
}

// Function to validate Address Line 2 (Optional)
function validateAddressLine2() {
    const addressLine2 = document.getElementById("addressline2").value;
    const addressLine2Error = document.getElementById("addressline2-error");

    if (addressLine2.length < 2 || addressLine2.length > 30) {
        addressLine2Error.textContent = "Address Line 2 must be between 2 and 30 characters.";
        return false;
    } else {
        addressLine2Error.textContent = ""; 
        return true;
    }
}

// Function to validate the city field
function validateCity() {
    const city = document.getElementById("city").value;
    const cityError = document.getElementById("city-error");

    if (city.length < 2 || city.length > 30) {
        cityError.textContent = "City must be between 2 and 30 characters.";
        return false;
    } else {
        cityError.textContent = ""; 
        return true;
    }
}

// Function to validate the zip code
function validateZipcode() {
    const zip = document.getElementById("zip").value;
    const zipError = document.getElementById("zip-error");
    const zipPattern = /^\d{5}(-\d{4})?$/; 

    if (!zipPattern.test(zip)) {
        zipError.textContent = "Invalid Zip Code. Enter a 5-digit zip code or zip+4 format (12345-6789).";
        return false;
    } else {
        zipError.textContent = ""; 
        return true;
    }
}

// Function to validate all address fields before submitting the form
function validateAddress() {
    const isAddressLine1Valid = validateAddressLine1();
    const isAddressLine2Valid = validateAddressLine2();
    const isCityValid = validateCity();
    const isZipValid = validateZipcode();

    // Ensure all address fields are valid
    return isAddressLine1Valid && isAddressLine2Valid && isCityValid && isZipValid;
}

// Attach the validation to the form's submit event
document.getElementById("signup").onsubmit = function() {
    return validateAddress(); // Only submit if all validations pass
};

// user ID validation //

function validateUserId(){
    let userid = document.getElementById("userid").value.toLowerCase();

    // Redisplay UserId in lowercase
    document.getElementById("userid").value = userid;

    if (userid.length === 0) {
        document.getElementById("userid-error").innerHTML = "User ID cannot be empty";
        return false;
    }

    // Check userId does not start with a number
    if (!isNaN(userid.charAt(0))) {
        document.getElementById("userid-error").innerHTML = "User ID cannot start with a number";
        return false;    
    }

    // Check userId only contains letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(userid)) {
        document.getElementById("userid-error").innerHTML = "User ID can only contain letters, numbers, or underscores";
        return false;
    } else if (userid.length < 5) {
        document.getElementById("userid-error").innerHTML = "User ID must be at least 5 characters long";
        return false;
    } else if (userid.length > 30) {
        document.getElementById("userid-error").innerHTML = "User ID must not exceed 30 characters";
        return false;
    } else {
        document.getElementById("userid-error").innerHTML = "";
        return true;
    }
}

// Password

function validatePassword() {
    const pwd = document.getElementById("pwd").value;
    const user = document.getElementById("userid").value;

    let errorFlag = 0;

    // Check for lowercase letters
    if (!pwd.match(/[a-z]/)) {
        document.getElementById("msg1").innerHTML = "Enter at least 1 lowercase letter";
        errorFlag = 1;
    } else {
        document.getElementById("msg1").innerHTML = "";
    }

    // Check for capital letters
    if (!pwd.match(/[A-Z]/)) {
        document.getElementById("msg2").innerHTML = "Enter at least 1 capital letter";
        errorFlag = 1;
    } else {
        document.getElementById("msg2").innerHTML = "";
    }

    // Check for numbers
    if (!pwd.match(/[0-9]/)) {
        document.getElementById("msg3").innerHTML = "Enter at least one number";
        errorFlag = 1;
    } else {
        document.getElementById("msg3").innerHTML = "";
    }

    // Check for special characters
    if (!pwd.match(/[!@#%&*\-_\\.+()]/)) {
        document.getElementById("msg4").innerHTML = "Enter at least 1 special character";
        errorFlag = 1;
    } else {
        document.getElementById("msg4").innerHTML = "";
    }

    // Check for length
    if (pwd.length < 8) {
        document.getElementById("msg5").innerHTML = "Enter a minimum of 8 characters";
        errorFlag = 1;
    } else {
        document.getElementById("msg5").innerHTML = "";
    }

    // Check if password equals the user ID
    if (pwd === user || pwd.includes(user)) {
        document.getElementById("msg6").innerHTML = "Password cannot be equal to or contain the User ID";
        errorFlag = 1;
    } else {
        document.getElementById("msg6").innerHTML = "";
    }

    // Display a valid message if there are no errors
    if (errorFlag === 0) {
        document.getElementById("msg3").innerHTML = "Valid Password";
    }
}


// Confrim password

function confirmPassword() {
    const pwd = document.getElementById("pwd").value;
    const pwd2 = document.getElementById("pwd2").value;

    if (pwd2 !== pwd) {
        document.getElementById("pwd2-error").innerHTML = "Passwords do not match";
        return false;
    } else {
        document.getElementById("pwd2-error").innerHTML = "";
        return true;
    }
}

// Redisplay user input
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan='3'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) { 
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class='outputdata'>&#x2713;</td></tr>"; 
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) { 
                        formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>"; 
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput += "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showinput").innerHTML = formoutput;
    }
}

// Remove User Input

function removeReview(){
    document.getElementById("showinput").innerHTML = "";
}