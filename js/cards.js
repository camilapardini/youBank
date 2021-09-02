$(() => {

  /*---- Logica general del formulario y proceso de los datos ----*/

  let miFormulario = $("#cargaSolicitud")

  miFormulario.submit(function (e) {

    e.preventDefault();
    let error = $("#error");
    error.html = "";
    error.css("color", "red")
    let edad = $("#edad").val();
    let sueldo = $("#sueldo").val();
    let nombre = $("#nombreUsuario").val();



    localStorage.setItem("nombre", nombre)
    localStorage.setItem("edad", edad)
    localStorage.setItem("sueldo", sueldo)


    function ordenarContenido() {
      $("#contenidoPrincipal").show().css({
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex-direction": "column"
      })
    }

    function errorDisplayNone() {
      $("#error").css("display", "none");
    }

    function desplegarFormContacto() {
      $("#formContactanos").show().css({
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex-direction": "column"
      })
    }

    function numeroAleatorio(min, max) {
      return Math.floor(1000 + Math.random() * 9000);
    }


    const URLGET = "https://camilapardini.github.io/dataJson/tarjetas.json";
    $.getJSON(URLGET, function (respuesta, estado) {
      if (estado === "success") {
        let misDatos = respuesta;
        console.log(misDatos)

        if (edad === "Menor de 16 años") {

          $("#error").html("¡Disculpanos! Por el momento no tenemos ninguna tarjeta para menores de 16.")

        } else if (edad === "Entre 16 y 20 años") {

          misDatos.forEach(el => {
            if (el.nombre === "youColors") {

              let miHtml = document.querySelector("#contenidoPrincipal");
              miHtml.innerHTML =
                `
            
            <h3 class= "tituloTarjeta"> Disfrutá de tu tarjeta <span class="spanColors">${el.nombre}</span></h3>          
            <p class= "marcaTarjeta">Marca ${el.marca}</p>
            
            <div class="caracteristicasTarjeta">
            <div class="cardColor hvr-grow">
            <form>
              <h1 class="card__title">YOUBANK CREDITO</h1>
              <div class="card__row">
                <div class="card__col">
                  <label for="cardNumber" class="card__label">Número de tarjeta</label>
                  <p class="card__input card__input--large" id="cardNumber">
                    ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} 
                  </p>
                </div>
                <div class="card__col card__chip">
                  <img src="img/chip.svg" alt="chip"/>
                </div>
              </div>
              <div class="card__row">
                <div class="card__col">
                  <label for="cardExpiry" class="card__label">Titular</label>
                  <p class="card__input" id="cardExpiry"> ${nombre.toUpperCase()}</p>
                </div>
                <div class="card__col">
                  <label for="cardCcv" class="card__label">Expiración</label>
                  <p class="card__input" id="cardCcv">09/26</p>
                </div>
                <div class="card__col card__brand">
                <img src="img/Visa_Inc._logo.svg" alt="chip"/>
                </div>
              </div>
            </form>
          </div>
          
          <div class="contenedorCards">
<div class="cardBeneficios">
<div class="imgCard">
  <div class="imgInterna">
    <div class="imgInternaContenedor">
      <img src="https://camilapardini.github.io/youBank/img/dumbell.png">
    </div>
  </div>
</div>
<div class="contenedorTexto">
<h3>Descuentos en gimnasios linea Megatlon</h3>
</div>
</div>
      <div class="cardBeneficios">
<div class="imgCard">
  <div class="imgInterna">
    <div class="imgInternaContenedor">
      <img src="https://camilapardini.github.io/youBank/img/up.png">
    </div>
  </div>
</div>
<div class="contenedorTexto">
<h3>Accedé a un límite de hasta $10000</h3>
</div>
</div>
<div class="cardBeneficios">
<div class="imgCard">
  <div class="imgInterna">
    <div class="imgInternaContenedor">
      <img src="https://camilapardini.github.io/youBank/img/cutlery.png">
    </div>
  </div>
</div>
<div class="contenedorTexto">
<h3>Increíbles descuentos en patios de comidas</h3>
</div>
</div>
<div class="cardBeneficios">
<div class="imgCard">
  <div class="imgInterna">
    <div class="imgInternaContenedor">
      <img src="https://camilapardini.github.io/youBank/img/giftbox.png">
    </div>
  </div>
</div>
<div class="contenedorTexto">
<h3>Acumulá puntos para canjear por premios</h3>
</div>
</div>

</div>
      </div>
          
            `
              errorDisplayNone()
              ordenarContenido();
              desplegarFormContacto();

}
});

        } else if (edad === "Entre 20 y 30 años" && sueldo === "Menos de 30000") {

          $("#error").html("Por el momento tu sueldo bruto no es suficiente para que podamos otorgarte una tarjeta.")

        } else if (edad === "Entre 20 y 30 años" && sueldo === "Entre 30000 y 50000") {

          misDatos.forEach(el => {
            if (el.nombre === "youGreen") {

              let miHtml = document.querySelector("#contenidoPrincipal");
              miHtml.innerHTML =
                `
            
                <h3 class= "tituloTarjeta"> Disfrutá de tu tarjeta <span class="spanGreen">${el.nombre}</span></h3>          
                <p class= "marcaTarjeta">Marca ${el.marca}</p>
                
                <div class="caracteristicasTarjeta">
                <div class="cardVerde hvr-grow">
                <form>
                  <h1 class="card__title">YOUBANK CREDITO</h1>
                  <div class="card__row">
                    <div class="card__col">
                      <label for="cardNumber" class="card__label">Número de tarjeta</label>
                      <p class="card__input card__input--large" id="cardNumber">
                        ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} 
                      </p>
                    </div>
                    <div class="card__col card__chip">
                      <img src="img/chip.svg" alt="chip"/>
                    </div>
                  </div>
                  <div class="card__row">
                    <div class="card__col">
                      <label for="cardExpiry" class="card__label">Titular</label>
                      <p class="card__input" id="cardExpiry"> ${nombre.toUpperCase()}</p>
                    </div>
                    <div class="card__col">
                      <label for="cardCcv" class="card__label">Expiración</label>
                      <p class="card__input" id="cardCcv">09/26</p>
                    </div>
                    <div class="card__col card__brand">
                    <img src="img/Visa_Inc._logo.svg" alt="chip"/>
                    </div>
                  </div>
                </form>
              </div>
              
              
     <div class="contenedorCards">
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/hanger.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Renová tu vestidor con descuentos en locales de ropa</h3>
    </div>
    </div>
          <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/up.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Accedé a un límite de hasta $30000</h3>
    </div>
    </div>
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/scissors.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Jueves de peluquerías y barberías</h3>
    </div>
    </div>
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/map.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Usala en países limítrofes</h3>
    </div>
    </div>
    
    </div> 
          </div>
          
            `
              errorDisplayNone()
              ordenarContenido();
              desplegarFormContacto();


            }
          });

        } else if (edad === "Entre 20 y 30 años" && sueldo === "Mas de 50000") {

          misDatos.forEach(el => {
            if (el.nombre === "youGold") {
              let miHtml = document.querySelector("#contenidoPrincipal");
              miHtml.innerHTML =
                `
                <h3 class= "tituloTarjeta"> Disfrutá de tu tarjeta <span class="spanGold">${el.nombre}</span></h3>          
                <p class= "marcaTarjeta">Marca ${el.marca}</p>
                
                <div class="caracteristicasTarjeta">
                <div class="cardDorada hvr-grow">
                <form>
                  <h1 class="card__title">YOUBANK CREDITO</h1>
                  <div class="card__row">
                    <div class="card__col">
                      <label for="cardNumber" class="card__label">Número de tarjeta</label>
                      <p class="card__input card__input--large" id="cardNumber">
                        ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} 
                      </p>
                    </div>
                    <div class="card__col card__chip">
                      <img src="img/chip.svg" alt="chip"/>
                    </div>
                  </div>
                  <div class="card__row">
                    <div class="card__col">
                      <label for="cardExpiry" class="card__label">Titular</label>
                      <p class="card__input" id="cardExpiry"> ${nombre.toUpperCase()}</p>
                    </div>
                    <div class="card__col">
                      <label for="cardCcv" class="card__label">Expiración</label>
                      <p class="card__input" id="cardCcv">09/26</p>
                    </div>
                    <div class="card__col card__brand">
                    <img src="img/Visa_Inc._logo.svg" alt="chip"/>
                    </div>
                  </div>
                </form>
              </div>
              
              <div class="contenedorCards">
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/cutlery.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Descuentos los viernes en los mejores restaurantes</h3>
    </div>
    </div>
          <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/up.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Accedé a un límite de hasta $50000</h3>
    </div>
    </div>
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/responsive.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>24 cuotas sin interés en smartphones y tv</h3>
    </div>
    </div>
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/map.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Usala en países limítrofes</h3>
    </div>
    </div>
    
    </div> 
          </div>
        
            `
              errorDisplayNone()
              ordenarContenido();
              desplegarFormContacto();

            }
          });

        } else if (edad === "Mayor de 30 años" && sueldo === "Menos de 30000") {

          misDatos.forEach(el => {
            if (el.nombre === "youGreen") {
              let miHtml = document.querySelector("#contenidoPrincipal");
              miHtml.innerHTML =
                `
                <h3 class= "tituloTarjeta"> Disfrutá de tu tarjeta <span class="spanGreen">${el.nombre}</span></h3>          
                <p class= "marcaTarjeta">Marca ${el.marca}</p>
                
                <div class="caracteristicasTarjeta">
                <div class="cardVerde hvr-grow">
                <form>
                  <h1 class="card__title">YOUBANK CREDITO</h1>
                  <div class="card__row">
                    <div class="card__col">
                      <label for="cardNumber" class="card__label">Número de tarjeta</label>
                      <p class="card__input card__input--large" id="cardNumber">
                        ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} 
                      </p>
                    </div>
                    <div class="card__col card__chip">
                      <img src="img/chip.svg" alt="chip"/>
                    </div>
                  </div>
                  <div class="card__row">
                    <div class="card__col">
                      <label for="cardExpiry" class="card__label">Titular</label>
                      <p class="card__input" id="cardExpiry"> ${nombre.toUpperCase()}</p>
                    </div>
                    <div class="card__col">
                      <label for="cardCcv" class="card__label">Expiración</label>
                      <p class="card__input" id="cardCcv">09/26</p>
                    </div>
                    <div class="card__col card__brand">
                    <img src="img/Visa_Inc._logo.svg" alt="chip"/>
                    </div>
                  </div>
                </form>
              </div>
              
              <div class="contenedorCards">
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/hanger.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Renová tu vestidor con descuentos en locales de ropa</h3>
    </div>
    </div>
          <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/up.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Accedé a un límite de hasta $30000</h3>
    </div>
    </div>
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/scissors.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Jueves de peluquerías y barberías</h3>
    </div>
    </div>
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/map.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Usala en países limítrofes</h3>
    </div>
    </div>
    
    </div> 
          </div>
          
            `
              errorDisplayNone()
              ordenarContenido();
              desplegarFormContacto();

            }
          });

        } else if (edad === "Mayor de 30 años" && sueldo === "Entre 30000 y 50000") {

          misDatos.forEach(el => {
            if (el.nombre === "youPlatinum") {
              let miHtml = document.querySelector("#contenidoPrincipal");
              miHtml.innerHTML =
                `
                <h3 class= "tituloTarjeta"> Disfrutá de tu tarjeta <span class="spanPlatinum">${el.nombre}</span></h3>          
                <p class= "marcaTarjeta">Marca ${el.marca}</p>
                
                <div class="caracteristicasTarjeta">
                <div class="cardPlateada hvr-grow">
                <form>
                  <h1 class="card__title">YOUBANK CREDITO</h1>
                  <div class="card__row">
                    <div class="card__col">
                      <label for="cardNumber" class="card__label">Número de tarjeta</label>
                      <p class="card__input card__input--large" id="cardNumber">
                        ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} 
                      </p>
                    </div>
                    <div class="card__col card__chip">
                      <img src="img/chip.svg" alt="chip"/>
                    </div>
                  </div>
                  <div class="card__row">
                    <div class="card__col">
                      <label for="cardExpiry" class="card__label">Titular</label>
                      <p class="card__input" id="cardExpiry"> ${nombre.toUpperCase()}</p>
                    </div>
                    <div class="card__col">
                      <label for="cardCcv" class="card__label">Expiración</label>
                      <p class="card__input" id="cardCcv">09/26</p>
                    </div>
                    <div class="card__col card__brand">
                    <img src="img/Visa_Inc._logo.svg" alt="chip"/>
                    </div>
                  </div>
                </form>
              </div>

              <div class="contenedorCards">
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/shopping.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Gastando más de 10mil en super te reintegramos el 20%</h3>
    </div>
    </div>
          <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/up.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Accedé a un límite de hasta $70000</h3>
    </div>
    </div>
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/delivery.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Envíos gratis en MercadoLibre</h3>
    </div>
    </div>
    <div class="cardBeneficios">
    <div class="imgCard">
      <div class="imgInterna">
        <div class="imgInternaContenedor">
          <img src="https://camilapardini.github.io/youBank/img/map.png">
        </div>
      </div>
    </div>
    <div class="contenedorTexto">
    <h3>Usala en países limítrofes</h3>
    </div>
    </div>
    
    </div> 
          </div>

            `
              errorDisplayNone()
              ordenarContenido();
              desplegarFormContacto();

            }
          });

        } else if (edad === "Mayor de 30 años" && sueldo === "Mas de 50000") {


          misDatos.forEach(el => {
            if (el.nombre === "youBlack") {
              let miHtml = document.querySelector("#contenidoPrincipal");
              miHtml.innerHTML =
                `
                    <h3 class= "tituloTarjeta"> Disfrutá de tu tarjeta <span class="spanBlack">${el.nombre}</span></h3>          
                    <p class= "marcaTarjeta">  Marca ${el.marca}</p>
                    
                    <div class="infoTarjeta">
                    <div class="caracteristicasTarjeta">
                    <div class="cardNegra hvr-grow">
                    <form>
                      <h1 class="card__title" style="color: white">YOUBANK CREDITO</h1>
                      <div class="card__row">
                        <div class="card__col">
                          <label for="cardNumber" class="card__label" style="color: white">Número de tarjeta</label>
                          <p class="card__input card__input--large" id="cardNumber">
                            ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} ${numeroAleatorio()} 
                          </p>
                        </div>
                        <div class="card__col card__chip">
                          <img src="img/chip.svg" alt="chip"/>
                        </div>
                      </div>
                      <div class="card__row">
                        <div class="card__col">
                          <label for="cardExpiry" class="card__label" style="color: white">Titular</label>
                          <p class="card__input" id="cardExpiry"> ${nombre.toUpperCase()}</p>
                        </div>
                        <div class="card__col">
                          <label for="cardCcv" class="card__label" style="color: white">Expiración</label>
                          <p class="card__input" id="cardCcv">09/26</p>
                        </div>
                        <div class="card__col card__brand">
                        <img src="img/Visa_Inc._logo.svg" alt="chip"/>
                        </div>
                      </div>
                    </form>
                  </div>
        
                  <div class="contenedorCards">
                  <div class="cardBeneficios">
                  <div class="imgCard">
                    <div class="imgInterna">
                      <div class="imgInternaContenedor">
                        <img src="https://camilapardini.github.io/youBank/img/shopping-bags.png">
                      </div>
                    </div>
                  </div>
                  <div class="contenedorTexto">
                  <h3>Descuentos mensuales gimnasios y shoppings</h3>
                  </div>
                  </div>
                        <div class="cardBeneficios">
                  <div class="imgCard">
                    <div class="imgInterna">
                      <div class="imgInternaContenedor">
                        <img src="https://camilapardini.github.io/youBank/img/up.png">
                      </div>
                    </div>
                  </div>
                  <div class="contenedorTexto">
                  <h3>Accedé a un límite de hasta $120000</h3>
                  </div>
                  </div>
                  <div class="cardBeneficios">
                  <div class="imgCard">
                    <div class="imgInterna">
                      <div class="imgInternaContenedor">
                        <img src="https://camilapardini.github.io/youBank/img/vip-room.png">
                      </div>
                    </div>
                  </div>
                  <div class="contenedorTexto">
                  <h3>Pase a salon VIP en aeropuertos de Argentina</h3>
                  </div>
                  </div>
                  <div class="cardBeneficios">
                  <div class="imgCard">
                    <div class="imgInterna">
                      <div class="imgInternaContenedor">
                        <img src="https://camilapardini.github.io/youBank/img/location.png">
                      </div>
                    </div>
                  </div>
                  <div class="contenedorTexto">
                  <h3>Usala en todo el mundo</h3>
                  </div>
                  </div>
                  
              </div>
              </div>
        `
              errorDisplayNone()
              ordenarContenido();
              desplegarFormContacto();


            }
          });

        } else if (edad === "Seleccione una opcion" && sueldo === "Mas de 50000" || sueldo === "Menos de 30000" || sueldo === "Entre 30000 y 50000") {

          $("#error").html("Debe completar su edad.")


        } else if (sueldo === "Seleccione una opcion" && edad === "Menos de 18 años" || edad === "Entre 18 y 30 años" || edad === "Mayor de 30 años") {

          $("#error").html("Debe completar su sueldo bruto.")

        } else if (nombre === "" && edad === "Menos de 18 años" || edad === "Entre 18 y 30 años" || edad === "Mayor de 30 años") {

          $("#error").html("Debe completar su sueldo bruto.")


        } else {
          $("#error").html("Debe completar los datos solicitados.")

        }
      }
    })

  })
})