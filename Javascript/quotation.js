const quotationForm = document.getElementById("quotation");
if(quotationForm){
    quotationForm.addEventListener("submit",function(event){
        event.preventDefault();
        const fname =document.getElementById("fname").value.trim();
        const lname =document.getElementById("lname").value.trim();
        const email =document.getElementById("email").value.trim();

        const catergory =document.getElementById("catergory").value;
        const people =document.getElementById("people").value;

         const individual =document.getElementById("individual").value;
          const group =document.getElementById("group").value;

         const price =document.getElementById("price").value;

         if(!Number.isInteger(people) || people < 1) {
            alert("Please enter a valid number of people");
            return
         }

         let selectedPackage ="";
         if(catergory === "individual") {
            selectedPackage = individual;

            if(selectedPackage === ""){
                alert("Please select an individual package");
                return;
            }

            if(price !== 750){
                alert("Please the individual pacakge price of R750");
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
                alert("Please the individual pacakge price of R1500");
                return;
            }
         } else{
            alert("please select a booking catergory");
            return;
         }

    })
}