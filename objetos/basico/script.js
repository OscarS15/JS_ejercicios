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

document.getElementById("ej7").addEventListener("click", () =>{
    let biblioteca = {
        libros: [
            {titulo: "Libro numero 1", autor: "Autor numero 1"},
            {titulo: "Libro numero 2", autor: "Autor numero 2"},
            {titulo: "Libro numero 3", autor: "Autor numero 3"}
        ]
    }
    console.log(biblioteca.libros);// imprime todos los libros de la biblio
    console.log(biblioteca.libros[2]);// imprime el tercer libro
    console.log(biblioteca.libros[0].titulo);// imprime el titulo del primer libro
    console.log(biblioteca.libros[1].autor);// imprime el autor del segundo libro
})

document.getElementById("ej8").addEventListener("click", () =>{
    let cuentaBancaria = {
        saldo: 0,
        depositar: function(cantidad){
            this.saldo += cantidad //this hace referencia al objeto cuentaBancaria
        },
        retirar: function(cantidad){
            this.saldo -= cantidad
        },
        verSaldo: function(){
            console.log("Tu saldo es: "+this.saldo);
        }
    }
    cuentaBancaria.depositar(1300)
    cuentaBancaria.retirar(300)
    cuentaBancaria.verSaldo()
})

document.getElementById("ej9").addEventListener("click", () =>{
    let original = {a: 1, b: 2, c:{d:3}}
    let copia = Object.assign({}, original)
    copia.a = 10
    console.log(copia);
    console.log(original);//he meodificado la copia y no se ha modificado la original
    //si modificamos el atributo c de la copia, se modificará en la original
    copia.c.d = 30
    console.log(copia);
    console.log(original);
    //Para evitar esto, podemos hacer una copia profunda
    let copiaProfunda = JSON.parse(JSON.stringify(original))
    copiaProfunda.c.d = 300
    console.log(copiaProfunda);
    console.log(original);
})

document.getElementById("ej10").addEventListener("click", () =>{
    let tienda = {
        producto: [
            {nombre:"mac del 2015", precio: 560, stock: 4},
            {nombre: "pc Asus gaming", precio: 967, stock: 8},
            {nombre: "nintendo switch",precio: 200, stock: 23}
        ],
        agregarProducto: function(nombre, precio, stock){
            this.producto.push({nombre, precio, stock})
        },
        buscarProducto: function(nombre){
            for (const clave in this.producto) {
                if (this.producto.nombre == nombre) {
                    return this.producto[clave]
                }else{
                    return "Producto no encontrado"
                }
            }
        },
        venderProducto: function(nombre, cantidad){

        }
    }

    tienda.agregarProducto("ps5", 500, 10)
    tienda.buscarProducto("ps55")
    //console.log(tienda.producto);
})