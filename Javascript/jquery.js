const faqSection =[
    {
        question:"Are booking open all round the year",
        answer:"Only specific activity packages are open the whole year round due to weather/seasonal changes  during the year. "
    },

    {
        question :"Are bookings only made Online",
        answer : "No. But customers are encouraged to first use the website to calculate their potential esitmated booking fees before coming to make an in-person booking to avoid confusion."
    },

    {
        question :"Does the company allow customers to volunteer in supervision",
        answer : "Yes, but it restricted to people who are certified professiosn in the activity. e.g Professional scuba diver."
    },

    {
        question :"Are the equipments offered by the company free",
        answer : "Yes, all equipments required for each package is included in the package fee paid."
    },

    {
        question :"Is it possible to personlize booking packages",
        answer : "Yes, But be reminded that comes at a additional fee."
    },
];

const faqContainer =$("#faq");
if (faqContainer.length >0) {
    faqSection.forEach(function(item, index){
        const faqItem =$("<div>").addClass("faq-item");

        const question =$ ("<button>")
        .addClass("faq-question")
        .attr("type", "button")
        .attr("aria-expanded", "false")
        .attr("aria-controls", "faq-answer-" + index)
        .text(item.question);

         const answer =$("<div>")
        .addClass("faq-answer")
        .attr("id", "faq-answer-" +index)
        .attr("hidden", true)
        .text(item.answer);

            faqItem.append(question);
            faqItem.append(answer);
            faqContainer.append(faqItem);
    });

    }
    
    $("#faq").on("click", ".faq-question", function(){
        const answer =$(this).next(".faq-answer");

        const isOpen =$(this).attr("aria-expanded") === "true";

        $("#faq .faq-answer:visible").not(answer).slideUp(300);
        $("#faq .faq-question").not(this).attr("aria-expanded", "false");

        if (isOpen){
            answer.slideUp(300);
            $(this).attr("aria-expanded","false");
        }
        else{
            answer.prop("hidden",false)
            answer.slideDown(300);
            $(this).attr("aria-expanded", "true")
        }
    });

    