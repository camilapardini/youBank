$(() => {

    //---- Creo los dos objetos ----//
  
    class Persona {
  
      constructor(pedido) {
        this.edad = pedido.edad
        this.sueldo = pedido.sueldo
      }
    }
  
  
    class Tarjeta {
  
      constructor(caracteristicas) {
        this.nombre = caracteristicas.nombre
        this.color = caracteristicas.color
        this.categoria = caracteristicas.categoria
        this.marca = caracteristicas.marca
        this.tecnologia = caracteristicas.tecnologia
        this.imagen = caracteristicas.imagen
  
      }
    }

  let persona = new Persona({
    edad: "",
    sueldo: ""
  })
  let tarjeta = new Tarjeta({
    nombre: "",
    marca: "",
    limite: ""
  })

})