//Custom code Vaibhav

subscribeNewsletter = function () {
    var email = document.getElementById("newsletter-email").value;
    var formEndpoint = "https://docs.google.com/forms/d/e/1FAIpQLSfUBT7VNmzG0DBschSao8l2Q1v8vexOBAYHUkqnNzrZcJMYpw/formResponse?&submit=Submit&usp=pp_url&entry.1008876945="
    var finalEndpointAfterAddingEmail = formEndpoint.concat(email);
    fetch(finalEndpointAfterAddingEmail, {
        method: "GET",
    })
        .then((response) => {
            if (response.ok) {
                alert("Form data submitted successfully!");
                // Optional: You can redirect the user to a thank-you page after submission
                // window.location.href = "thank_you_page.html";
            } else {
                alert("Failed to submit form data. Please try again later.");
            }
        }).finally(alert("Form data submitted successfully!"));
    // .catch((error) => {
    //     alert("An error occurred. Please try again later.");
    //     console.error("Error:", error);
    // });
}

submitQuery = function () {
    var formData = new FormData();
    var contactName = document.getElementById("contact-name").value;
    var contactEmail = document.getElementById("contact-email").value;
    var contactSubject = document.getElementById("contact-subject").value;
    var contactMessage = document.getElementById("contact-message").value;
    formData.append("entry.2005620554", contactName);
    formData.append("entry.1045781291", contactEmail);
    formData.append("entry.1166974658", contactSubject);
    formData.append("entry.839337160", contactMessage);

    var formEndpoint = "https://docs.google.com/forms/d/e/1FAIpQLScLFh3JZtVCkfbB6TAMzZDI0XU6YjhAt6hE3_YfGWoALho2PQ/formResponse?&submit=Submit&usp=pp_url"
    fetch(formEndpoint, {
        method: "POST",
        body: formData
    })
        .then((response) => {
            if (response.ok) {
                alert("Form data submitted successfully!");
                // Optional: You can redirect the user to a thank-you page after submission
                // window.location.href = "thank_you_page.html";
            } else {
                alert("Failed to submit form data. Please try again later.");
            }
        })
        // .catch((error) => {
        //     alert("An error occurred. Please try again later.");
        //     console.error("Error:", error);
        // })
        .finally(alert("Form data submitted successfully!"));

}










// // -------   Mail Send ajax

    //  $(document).ready(function() {
    //     var form = $('#myForm'); // contact form
    //     var submit = $('.submit-btn'); // submit button
    //     var alert = $('.alert-msg'); // alert div for show alert message

    //     // form submit event
    //     form.on('submit', function(e) {
    //         e.preventDefault(); // prevent default form submit

    //         $.ajax({
    //             url: 'mail.php', // form action url
    //             type: 'POST', // form submit method get/post
    //             dataType: 'html', // request type html/json/xml
    //             data: form.serialize(), // serialize form data
    //             beforeSend: function() {
    //                 alert.fadeOut();
    //                 submit.html('Sending....'); // change submit button text
    //             },
    //             success: function(data) {
    //                 alert.html(data).fadeIn(); // fade in response data
    //                 form.trigger('reset'); // reset form
    //                 submit.attr("style", "display: none !important");; // reset submit button text
    //             },
    //             error: function(e) {
    //                 console.log(e)
    //             }
    //         });
    //     });
    // });