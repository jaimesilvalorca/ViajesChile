$(document).ready(function(){
    console.log("documento cargado")
    $("a").on('click', function(event) {

      if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });

    //boton enviar datos
    $('#enviarContacto').click(function(){
        alert("Datos enviados!!"  )
    })
  });