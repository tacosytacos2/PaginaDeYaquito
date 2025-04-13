$(document).ready(function () {
    $('#contact-form').submit(function (event) {
      event.preventDefault(); // Evita el envío tradicional
  
      let formData = {
        name: $('input[name=name]').val(),
        email: $('input[name=email]').val(),
        message: $('textarea[name=message]').val()
      };
  
      $.ajax({
        url: 'https://formspree.io/f/YOUR_FORM_ID', // Reemplaza con tu Formspree ID
        method: 'POST',
        data: formData,
        dataType: 'json',
        success: function () {
          $('#form-response').html('<p style="color:green;">¡Mensaje enviado con éxito!</p>');
          $('#contact-form')[0].reset();
        },
        error: function () {
          $('#form-response').html('<p style="color:red;">Hubo un error al enviar. Intenta más tarde.</p>');
        }
      });
    });
  });