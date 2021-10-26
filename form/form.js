// @ts-nocheck
function send() {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (e) {
      e.preventDefault(),
        emailjs.sendForm('service_6gq48gb', 'template_fu895c4', this).then(
          function () {
            alert('Sent!!');
          },
          function (e) {
            Rollbar.warning('FAILED to send message');
          }
        );
    });
}
emailjs.init('user_aUQaLaKkjPI96V8O45yPq');
