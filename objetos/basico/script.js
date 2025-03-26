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