$('#contactForm').submit(function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        url: 'contact.php',
        method: 'POST',
        data: { name: name, email: email, message: message },
        success: function (data) {
            // Handle the successful response here
            $("#successMessage").removeClass("hide");
        },
        error: function (xhr, status, error) {
            // Handle any errors that occur during the request
            $("#errorMessage").removeClass("hide");
        }
    });


    // alert('Form submission prevented!');
});