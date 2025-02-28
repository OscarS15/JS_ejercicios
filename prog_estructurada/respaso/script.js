document.getElementById("ej1").addEventListener("click", function () {
    let num = parseFloat(prompt("Ingrese un número: "));

    if (num >= 100) {
    alert("El numero es mayor que 100");
    } else {
    alert("El numero no pasa de 100 eh");
    }
});

document.getElementById("ej2").addEventListener("click", function () {
    let vocal = prompt("Ingrese pa comprobar si es vocal: ");
    
    let vocales = ['a','e','i','o','u'];

    if(vocales.includes(vocal)){
        alert("Es vocal")
    }else{
        alert("no es vocaaal ")
    }
});

document.getElementById("ej3").addEventListener("click", function () {
    let num1 = prompt("Ingresa el primer numero: ");
    let num2 = prompt("Ingresa el segundo numero: ");
    let num3 = prompt("Ingresa el tercer numero: ");

/*     numeros =  [num1, num2, num3]
    numeroMayor = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMayor <= numeros[i]) {
            numeroMayor = numeros[i]
        }
    }
    alert("El nunero mayor es: " +numeroMayor) */

    if(num1 < num2 && num3 > num2){
        alert("el orden es creciente")
    }else{
        alert("El orden no es creciente, sorryyy")
    }
})

document.getElementById("ej4").addEventListener("click", function () {
    //necesario el parseFloat(), para convertirlo a numeros
    //prompt(), nos devuelve un String
    let num1 = parseFloat(prompt("Ingresa el primer numero: "));
    let num2 = parseFloat(prompt("Ingresa el segundo numero: "));
    let num3 = parseFloat(prompt("Ingresa el tercer numero: "));

    let sumados = num1 + num2;

    if(sumados == num3){
        alert("La suma del primer y segundo numero dan el tercero")
    }else{
        alert("sumadno el primer y segundo numero no dan el tercero")
    }
});

document.getElementById("ej5").addEventListener("click", function () {
    let opciones = prompt(`
            1. Archivo
            2. Buscar
            3. Salir`)
    switch (opciones) {
        case "Archivo":
            alert("Opcion correcta")
            break;
        case "Buscar":
            alert("Opcion correcta")
            break;
        case "Salir":
            alert("Opcion correcta")
            break;
        default:
            alert("Opcion incorrecta :(")
            break;
    }
});

document.getElementById("ej6").addEventListener("click", function () {
    let num1 = parseFloat(prompt("Ingresa el primer numero: "));
    let num2 = parseFloat(prompt("Ingresa el segundo numero: "));
    function par(num){
        if (num%2 == 0) {
            alert("Es par")
        }
    }
    par(num2)
    par(num1)
});

document.getElementById("ej7").addEventListener("click", function () {
    let opciones = prompt(`
            1. Equilátero
            2. Isósceles
            3. Escaleno`)

        let ladoA;
        let ladoB;
        let ladoC;
        let perimetro;
    switch (opciones) {
        case "Equilátero":
        case "1":
        case "equilatero":
            ladoA = prompt("Ingresa el lado: ");
            perimetro = ladoA * 3;
            alert("El perimetro es: " + perimetro)
            break;
        case "Isósceles":
        case "2":
        case "isosceles":
            ladoA = prompt("Ingresa los lados iguales: ");
            ladoB = prompt("Ingresa el lado diferente: ");
            perimetro =(2*ladoA) + ladoB ;
            alert("El perimetro es: " + perimetro)
            break;
        case "Escaleno":
        case "3":
        case "escaleno":
            ladoA = prompt("Ingresa el lado A: ");
            ladoB = prompt("Ingresa el lado B: ");
            ladoC = prompt("Ingresa el lado C: ");
            perimetro = ladoA + ladoB + ladoC;
            alert("El perimetro es: " + perimetro)
            break;
        default:
            alert("Opcion incorrecta :(")
            break;
    }
});

document.getElementById("ej8").addEventListener("click", function () {
    let num = parseFloat(prompt("Ingresa el importe: "));
    let impuesto;
    let neto;
    if (num>15000 && num > 0) {
        impuesto = 16
        neto = (16/100) * num;
        alert("EL neto es: "  + neto)
    }else{
        impuesto = 10
        neto = (10/100) * num
        alert("El neto es: " + neto)
    }
});

document.getElementById("ej8").addEventListener("click", function () {
    let num = parseFloat(prompt("Ingresa el importe: "));
    let impuesto;
    let neto;
    let montoDar = num - neto
    if (num>15000 && num > 0) {
        impuesto = 16
        neto = (16/100) * num;
        alert("EL neto es: "  + montoDar)
    }else{
        impuesto = 10
        neto = (10/100) * num
        alert("El neto es: " + montoDar)
    }
});

document.getElementById("ej9").addEventListener("click", function () {
    let hora = parseFloat(prompt("Ingresa la hora: "));
    let minuto = parseFloat(prompt("Ingresa el minuto: "));
    let segundo = parseFloat(prompt("Ingresa el segundo: "));

    segundo++

    if(segundo > 59){
        segundo = 0
        minuto++
    }
    if(minuto > 59){
        minuto = 0
        hora++
    }
    if(hora > 24){
        hora = 0
    }
    //hacemos que tenga dos digitos siempre, si los tiene ya, lo omite y lo convertimos a string pa concatenarlo
    alert(`Sumandole un segundo serian las : ${hora.toString().padStart(2, "0")}:${minuto.toString().padStart(2, "0")}:${segundo.toString().padStart(2, "0")}`)
});

document.getElementById("ej10").addEventListener("click", function () {
    let anio = parseFloat(prompt("Ingresa cuántos años llevas trabajando: "));
    const paga = 40000;
    let aumento = 0;
    
    if (anio > 10) {
        aumento = 10;
    } else if (anio > 5) {
        aumento = 7;
    } else if (anio > 3) {
        aumento = 5;
    } else {
        aumento = 3;
    }
    
    let montoDar = paga + (aumento / 100) * paga;
    
    alert(`Se te ha aumentado: ${aumento}% (${(aumento / 100) * paga}) 
    O sea que recibirás: ${montoDar} 
    Por llevar ${anio} años en la empresa`);
    
});

document.getElementById("ej11").addEventListener("click", function () {
    let nota1 = parseFloat(prompt("Ingresa la primer nota: "));
    let nota2 = parseFloat(prompt("Ingresa la segunda nota: "));
    let nota3 = parseFloat(prompt("Ingresa la tercer nota: "));
    let nota4 = parseFloat(prompt("Ingresa la cuarta nota: "));

    let notas = [nota1, nota2,nota3,nota4]

    //reduce() -> nos reduce a un solo valor nuestro array
    //acumulador es donde se guarda el resultado de cada vuelta
    // valor es el elemento el cual se esta procesando
    //tambien se le puede poner un valor inicial -- no lo queremos
    let suma = notas.reduce((acumulador, valor) => acumulador + valor) 
    let media = suma /notas.length 

    if(media >= 5){
        alert("has aprobado eh, ojala yo. Tu media es: " + media.toFixed(1)) //nos dice cuantos decimales queremos poner
    }else{
        alert("lo siento, repites:( Tu media: " + media.toFixed(1))
    }
});

document.getElementById("ej12").addEventListener("click", function(){
    let nombre = prompt("Dame tu nombre: ")
    let cantidad = parseFloat(prompt("Dime la cantidad de productos: "))
    let pago

    if(cantidad<5) pago = "Efectivo"
    if(cantidad>5&&cantidad<12) pago = "Tarjeta"
    if(cantidad>13) pago = "Cheque"

    alert(`Hola, ${nombre}.
        Te estas llevando ${cantidad} productos
        Y tu metodo de pago es: ${pago}
        `)
})

document.getElementById("ej13").addEventListener("click", function(){
    let nombre = prompt("Dame tu nombre: ")
    let cantidad = parseFloat(prompt("Dime la cantidad de llantas: "))
    let pago

    if(cantidad<=12) pago = 300
    if(cantidad>12) pago = 280

    alert(`Hola, ${nombre}.
        Te estas llevando ${cantidad} llantas
        Y el total a pagar es: €${pago*cantidad}
        `)
})

document.getElementById("ej14").addEventListener("click", function(){
    let nombre = prompt("Dame tu nombre: ")
    let producto = prompt("Dime el producto: ")
    let precio = parseFloat(prompt("Dime el precio: "))
    let cantidad = parseFloat(prompt("Dime la cantidad: "))
    let aDescontar =  (20/100)*(precio*cantidad)
    if(precio*cantidad>1000) {
        alert(`Hola, ${nombre}.
            Te estas llevando ${producto} la cantidad de ${cantidad}
            Y el total a pagar es: €${precio*cantidad}
            Pero has gastado mas de 1000€ 
            Y se te descuenta ${aDescontar}, 
            Total a pagar: ${(precio*cantidad)-aDescontar}
            `)
    }else{
        alert(`Hola, ${nombre}.
            Te estas llevando ${producto} la cantidad de ${cantidad}
            Y el total a pagar es: €${precio*cantidad}
            No hay descuento
            `)
    }
})

document.getElementById("ej15").addEventListener("click", function(){
    let nombre = prompt("Dame tu nombre: ")
    let pregunta = prompt(`Estudias y trabajas 
                            1. Si
                            2. No`)
    let carrera
    switch (pregunta) {
        case "si":
            carrera = prompt("Dame tu carrera: ")
            let trabajo = prompt("Dame tu trabajo: ")
            alert(`Hola, ${nombre}.
                Actualmente estas estudiando y trabajando, pobrecito
                Estdudias ${carrera}. y estas trabajando en ${trabajo}
                `)
            break;
        case "no":
            carrera = prompt("Dame tu carrera: ")
        alert(`Hola, ${nombre}.
            Actualmente estas estudiando, felicidades
            Estdudias ${carrera}. 
            `)
            break;
        default:
            break;
    }
})

document.getElementById("ej16").addEventListener("click", function(){
    let marca = prompt("Dame la marca de la moto: ")
    let precio = parseFloat(prompt("Dime el precio de la moto: "))
    
    switch (marca) {
        case "honda":
            aDescontar = (5/100) * precio
            alert(`Te estas llevando una moto de marca ${marca} 
                Y el total a pagar es: €${precio}
                Y se te descuenta ${aDescontar}, 
                Total a pagar: ${(precio)-aDescontar}
                `)
            break;
        case "yamaha":
            aDescontar = (8/100) * precio
            alert(`Te estas llevando una moto de marca ${marca} 
                Y el total a pagar es: €${precio}
                Y se te descuenta ${aDescontar}, 
                Total a pagar: ${(precio)-aDescontar}
                `)
            break;
        case "suzuki":
            aDescontar = (10/100) * precio
            alert(`Te estas llevando una moto de marca ${marca} 
                Y el total a pagar es: €${precio}
                Y se te descuenta ${aDescontar}, 
                Total a pagar: ${(precio)-aDescontar}
                `)
            break;
        default:
            aDescontar = (2/100) * precio
            alert(`Te estas llevando una moto de marca ${marca} 
                Y el total a pagar es: €${precio}
                Y se te descuenta ${aDescontar}, 
                Total a pagar: ${(precio)-aDescontar}
                `)
            break;
    }
})

document.getElementById("ej17").addEventListener("click", function(){
    let opcion = ""
    while (opcion != "s" && opcion != "n") {
        opcion = prompt("Solo puedes introducir S o N pa slair del bucle")
    } 
    
    alert("Bien saliste del bucle")
})

document.getElementById("ej18").addEventListener("click", function(){
    let num = parseFloat(prompt("Dime el numero: "))
    switch (num) {
        case 1:
            alert("El dia de la semana es lunes")
            break;
        case 2:
            alert("El dia de la semana es martes")
            break;
        case 3:
            alert("El dia de la semana es miercoels")
            break;
        case 4:
            alert("El dia de la semana es jeuves")
            break;
        case 5:
            alert("El dia de la semana es viernes")
            break;
        case 6:
            alert("El dia de la semana es sabado")
            break;
        case 7:
            alert("El dia de la semana es domingo")
            break;
        default:
            alert("no es un dia de la semana")
            break;
    }
})