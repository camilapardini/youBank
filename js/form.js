$(() => {

  $('.menu__enlace-contactanos').click(function desplegarFormContacto() {
    $("#formContactanos").show().css({
      "display": "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex-direction": "column"
    })
  })

  $('.botonEnviar').click(function () {
    $(".popUpConfirmacion").fadeIn(1000).css({
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center"
      })
  })

  $('.botonEnviar').click(function () {
    $(".container-all").fadeIn(1000)
  })

  $('.botonAceptar').click(function () {
    $(".popUpConfirmacion").fadeOut("fast")
    $(".container-all").fadeOut("fast")
  })

  
  /*---- Agrego estilos y funciones al formulario de solicitud de tarjeta ----*/

  $('.sel').each(function () {
    $(this).children('select').css('display', 'none');

    var $current = $(this);

    $(this).find('option').each(function (i) {
      if (i == 0) {
        $current.prepend($('<div>', {
          class: $current.attr('class').replace(/sel/g, 'sel__box')
        }));

        var placeholder = $(this).text();
        $current.prepend($('<span>', {
          class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
          text: placeholder,
          'data-placeholder': placeholder
        }));

        return;
      }

      $current.children('div').append($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
        text: $(this).text()
      }));
    });
  });


  $('.sel').click(function () {
    $(this).toggleClass('active');
  });


  $('.sel__box__options').click(function () {
    var txt = $(this).text();
    var index = $(this).index();

    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');

    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
  });

  $('.sel').click(function () {
    $('.sel').css("border-bottom", "3px solid #de8843")
  });

  $('.sel').mouseout(function () {
    $('.sel').css("border-bottom", "3px solid #263150")
  });


  /*---- Agrego estilos y funciones al formulario de contacto y datos personales----*/


  $(".form-input").focus(function () {
    let parent = $(this).parent();
    if (!parent.hasClass("active")) {
      parent.addClass("active")
    }
  });

  
  $(".form-input").blur(function () {
    let self = $(this);
    let parent = self.parent();
    if (parent.hasClass("active") && self.val().length === 0) {
      parent.removeClass("active")
    }
  });


  $("#form-contacto").submit(function (e) {

    e.preventDefault(); 
    
        let formData = {

        nombreCompleto: $("#nombreCompleto").val(),
        dni: $("#dni").val(),
        email: $("#email").val(),
        telefono: $("#telefono").val(),
        direccion: $("#direccion").val(),
        piso: $("#piso").val(),
        cp: $("#cp").val(),
      }

      localStorage.setItem("formData", JSON.stringify(formData));
      console.log(localStorage.getItem("formData"))
    
    });
})