$(function() {
    // Seleccionar elementos del DOM
    var enviar_correo = $('#enviarCorreo'); // Botón para enviar correo
    var mensaje= $('.alert-success'); // Mensaje de éxito
    var h3 = $('h3'); // Todas las etiquetas h3
    var card_title =$('.card-title'); // Todos los títulos de las tarjetas

    // Función para manejar el evento click en el botón de enviar correo
    enviar_correo.click(function(){
        // Mostrar el mensaje de éxito con una animación de fadeIn y luego ocultarlo con fadeOut
        mensaje.fadeIn('slow');
        mensaje.fadeOut(2000);
    });
    
    // Función para manejar el evento doble clic en las etiquetas h3
    h3.on("dblclick", function(){
        // Agregar o quitar la clase 'red' a la etiqueta h3 dependiendo de si ya la tiene o no
        if (!$(this).hasClass('red')){
            $(this).addClass('red');
        } else {
            $(this).removeClass('red');
        }
    });
    
    // Función para manejar el evento click en los títulos de las tarjetas
    card_title.click(function(){
        // Alternar la visualización del contenido de texto de la tarjeta con una animación de slideToggle
        $('.card-text').slideToggle('slow');
    });

    // Inicializar los tooltips utilizando Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
