console.log("Hello");

function validateInput() {
    var errormessage = "";
    var radioMale = document.getElementById("male").checked;
    var radioFemale = document.getElementById("female").checked;
    let letters = /^[A-Za-z]+$/;

    if (document.getElementById("firstname").value == "") {
        errormessage += "Please enter your first name \n";
        document.getElementById("firstname").style.borderColor = "red";
    } else { 
        if(!document.getElementById("firstname").value.match(letters)) {
            errormessage += "Please input alphabet characters only \n";
            document.getElementById("firstname").style.borderColor = "red";  
        } else {
            document.getElementById("firstname").style.borderColor = "white"; 
        }
    }

    console.log(
        document.getElementById("firstname").value
    );
    
    if (document.getElementById("lastname").value == "") {
        errormessage += "Please enter your last name \n";
        document.getElementById("lastname").style.borderColor = "red";
    } else {
        if(!document.getElementById("lastname").value.match(letters)) {
            errormessage += "Please input alphabet characters only \n";
            document.getElementById("lastname").style.borderColor = "red";  
        } else {
            document.getElementById("lastname").style.borderColor = "white"; 
        }
    }

    console.log(
        document.getElementById("lastname").value
    );

    if (document.getElementById("message").value == "") {
        errormessage += "Please enter your message \n";
        document.getElementById("message").style.borderColor = "red";
    }

    console.log(
        document.getElementById("message").value
    );

    if ((radioMale == "") && (radioFemale == "")) {
        errormessage += "Select either male or female \n";
    }

    if (errormessage != "") {
        alert(errormessage);
        return false;

        
    } else {
        alert("Thank you for contacting us, " + document.getElementById("firstname").value);
        return true;
        
    }  
    
}

