// @ts-nocheck
(function () {
  emailjs.init('user_aUQaLaKkjPI96V8O45yPq');
})();

function send() {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      emailjs.sendForm('service_6gq48gb', 'template_fu895c4', this).then(
        function () {
          alert('Sent!!');
        },
        function (error) {
          Rollbar.warning('FAILED to send message');
        }
      );
    });
}
