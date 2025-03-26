document.getElementById("ej1").addEventListener("click", ()=>{
    let persona = {
        nombre: "Susana",
        edad: 27,
        ciudad: "Madrid"
    }
    
    console.log(persona.nombre);
    console.log(persona.edad);
    console.log(persona.ciudad);
})

document.getElementById("ej2").addEventListener("click", function(){
    let coche =  {
        marca: "Toyota",
        modelo: "Corolla"
    }
    coche.año = 2020
    coche.modelo = "Camry"
    delete coche.marca
    console.log(coche);
})

document.getElementById("ej3").addEventListener("click", () =>{
    let calculadora = {
        sumar: function(a,b){
            return a + b
        },
        restar: function(a,b){
            return a - b
        }
    }

    console.log(calculadora.sumar(5, 10));
    console.log(calculadora.restar(10, 5));
})

document.getElementById("ej4").addEventListener("click", () =>{
    let usuario = {
        nombre: "Carlos",
        edad: 30,
        profesion: "Desarrollador"
      };

      for (const clave in usuario) {
        console.log(clave + ": " + usuario[clave]);
      }// nos está mostrando nombre(clave): Carlos(valor) 
})
document.getElementById("ej5").addEventListener("click", function(){
    let infoPersonal = {nombre: "Oscar", edad: 22, ciudad: "Madrid"}
    let infoPuesto = {puesto: "Desarrollador", experiencia: 2, sueldo: 30000}
    let empleado = Object.assign(infoPersonal, infoPuesto) //Estamos uniendo los dos objetos en uno solo
    console.log(empleado);
})

document.getElementById("ej6").addEventListener("click", () =>{
    let pelicula = {
        titulo: "Transformers",
        director: "Michael Bay",
        año: 2007,
    }
    let {titulo, año} = pelicula
    console.log(titulo)
    console.log(año);
})