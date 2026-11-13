  const bookForm = document.getElementById("book");


if (bookForm) {

    
    bookForm.addEventListener("submit", function(event) {

       
        event.preventDefault();

     
 const name = document.getElementById("fname").value.trim();
        const surname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

 const category = document.getElementById("catergory").value;
const bookingDate = document.getElementById("bookingDate").value;

            const people = Number(document.getElementById("people").value);
  const individual = document.getElementById("individual").value;
        const group = document.getElementById("group").value
            const price = Number(document.getElementById("price").value);

        
         document.querySelectorAll(".error-message").forEach(function(error) { 

            error.textContent = "";
        });

        
        let valid = true;

        
        const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

        if (!namePattern.test(name)) {
                  showError("fnameError", "Please enter a valid name.");
            valid = false;
        }
   
   if (!namePattern.test(surname)) {
            showError("lnameError", "Please enter a valid surname.");
               valid = false;
        }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (!emailPattern.test(email)) {
               showError("emailError", "Please enter a valid email address.");
            valid = false;
        }

        
        const phonePattern = /^0\d{9}$/;

        if (!phonePattern.test(phone)) {
     showError("phoneError", "Enter a valid 10-digit phone number.");
            valid = false;
        
        }
    if (category === "") {
                showError("catergoryError", "Please select a booking category.");
    
            valid = false;
        }

 if (!Number.isInteger(people) || people < 1) {
            showError("peopleError", "Enter a whole number of at least 1.");
    valid = false;
            }

     
  if (category === "individual") {

            if (individual === "") {
                showError("individualError", "Please select an individual package.");

       valid = false;
            }

         if (price !== 750) {
     showError("priceError", "Please select the individual price of R750.");
            
             valid = false;
            }
  } else if (category === "group") {

                      if (group === "") {
   showError("groupError", "Please select a group package.");
                valid = false;
            }

    if (price !== 1500) {
                showError("priceError", "Please select the group price of R1500.");
                    valid = false;
                }
        }

               if (!valid) {
                   return;
        }

     
     const selectedPackage = category === "individual" ? individual : group;

const bookingResults = document.getElementById("bookingResults");
const bookingDetails = document.getElementById("bookingDetails");


bookingDetails.textContent =
    "Customer Name: " + name + " " + surname + "\n" +
    "Email Address: " + email + "\n" +
    "Phone Number: " + phone + "\n" +
    "Booking Category: " + category + "\n" +
    "Selected Package: " + selectedPackage + "\n" +
    "Number of People: " + people + "\n" +
    "Package Price: R" + price.toFixed(2);

bookingResults.hidden = false;


bookingResults.scrollIntoView({ behavior: "smooth" });

    });

}


function showError(errorId, message) {

    const errorElement = document.getElementById(errorId);

    if (errorElement) {
        errorElement.textContent = message;
    }

}