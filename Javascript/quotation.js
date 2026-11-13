const quotationForm = document.getElementById("quotation");
if(quotationForm){
    quotationForm.addEventListener("submit",function(event){
        event.preventDefault();

        const name =document.getElementById("fname").value.trim();
        const surname =document.getElementById("lname").value.trim();
        const email =document.getElementById("email").value.trim();

        const people = Number(document.getElementById("people").value);
        const bookings = Number(document.getElementById("bookings").value);
        const catergory = document.getElementById("catergory").value;
        const price = Number(document.getElementById("price").value);
        

         const individual =document.getElementById("individual").value;
          const group =document.getElementById("group").value;

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
 
     
     if (catergory === "") {
            showError("bookingError", "Please select a booking category.");
            valid = false;
        }

        
         if(!Number.isInteger(people) || people < 1) {
            showError("peopleError", "Please enter a valid number of people.");
            valid = false;
        }
           if(!Number.isInteger(bookings) || bookings < 1) {
           showError("bookingsError", "Please enter a valid number of bookings.");
            valid = false;
        }

         let selectedPackage ="";

         if(catergory === "individual") {
            selectedPackage = individual;

            if(selectedPackage === ""){
                alert("Please select an individual package");
                return;
            }

            if(price !== 750){
                alert("Please the individual pacakge price is R750");
                return;
            }
         }
         else if (catergory === "group"){
            selectedPackage = group;

            if(selectedPackage === "") {
                alert("Please select a group package");
                return;
            }
              if(price !== 1500){
                alert("Please the group pacakge price is R1500");
                return;
            }
         } else{
            alert("please select a booking catergory");
            return;
         }

         if (!valid) {
    document.getElementById("results").hidden = true;
    return;
}

              const subtotal = price * people;
        let discountRate = 0;

          if (bookings === 1) {
                        discountRate = 0;
         }
          else if (bookings === 2) {
            discountRate = 0.05;
     }
          else if (bookings === 3) {
           discountRate = 0.10;
                  }
         else if (bookings > 3) {
              discountRate = 0.15;
           }
 
            const discountAmount = subtotal * discountRate;
          const discountedSubtotal = subtotal - discountAmount;
               const vat = discountedSubtotal * 0.15;
       const total = discountedSubtotal + vat;


       const results = document.getElementById("results");
         const details = document.getElementById("details");

                 const money = amount => amount.toLocaleString("en-ZA", {
                style: "currency",
            currency: "ZAR"
            });

           details.textContent = `
        Customer: ${name} ${surname}
        Email: ${email}

        Selected Activity: ${selectedPackage}
        Booking Category: ${catergory}
        Number of People: ${people}
        Number of Bookings: ${bookings}

        Subtotal: ${money(subtotal)}
        Discount: ${(discountRate * 100)}%
        Discount Amount: ${money(discountAmount)}
        Discounted Subtotal: ${money(discountedSubtotal)}

         VAT (15%): ${money(vat)}

        FINAL QUOTATION: ${money(total)}`;

        results.hidden = false; 
        results.scrollIntoView({ behavior: "smooth" });

     })
}

function showError(errorId, message) {

    const errorElement = document.getElementById(errorId);

    if (errorElement) {
        errorElement.textContent = message;
    }

}