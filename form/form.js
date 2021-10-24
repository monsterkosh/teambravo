(function() {
    emailjs.init("user_aUQaLaKkjPI96V8O45yPq");
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm("service_6gq48gb","template_fu895c4", this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
