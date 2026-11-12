  bookForm.addEventListener("submit",function(event){
    event.preventDefault();

    const name=document.getElementById('fname').value.trim();
    const surname=document.getElementById('lname').value.trim();
    const phone=document.getElementById('phone').value.trim();
    const email=document.getElementById('email').value.trim();
   

    document.querySelectorAll(".error-message").forEach(function(error){
        error.textContent="";
    });
    let valid = true;
    if(name==""){
        showError("fnameError", "Please enter your correct name.");valid= false;
    }

    if(surname==""){
        showError("lnameError", "Please enter your correct surname.");valid= false;
    }
    


    if(!/^\d{10}$/.test(phone)){
       showError("phoneError", "Please enter a valid 10-digit phone number.");valid= false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
       showError("emailError", "Please enter a valid email address.");valid= false;
    }

    const catergory=document.getElementById("catergory").value;
    if(catergory ===""){
        showError("catergoryError", "Please select an enquiry catergory.");
        valid=false;
    }
    
    if(!valid){
        return;
    }

    alert("Thank You," + name + "! Your information has been successfully submitted");
    bookForm.requestFullscreen();

    
});


function showError(errorId, message){
    const errorElement = document.getElementById(errorId);
    if (errorElement){
        errorElement.textContent = message ;
    }
}