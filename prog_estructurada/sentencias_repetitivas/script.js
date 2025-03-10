document.getElementById("ej1").addEventListener("click", function () {
    let num = parseFloat(prompt("Ingrese un número: "));
    let divisores = []
    let suma = 0
    for (let i = 1; i < num; i++) {
        if(num%i ===0){
            divisores.push(i) //push(), empujamos el numero al array
        }
    }
    for (let i = 0; i < divisores.length; i++) {
        suma += divisores[i]
    }
    if (suma == num) {
        alert("Este numero es perfecto como tú")
    }else{
        alert("No es perfect")
    }
});

document.getElementById("ej2").addEventListener("click", function () {
    let num = parseFloat(prompt("Ingresa el numero: "));
    cifras = 0
    while (num>0) {
        num = Math.floor(num/10)
        cifras++
    }

    alert(`El numero ingresado tiene ${cifras} cifras`)
})

document.getElementById("ej3").addEventListener("click", function () {
    let notas = new Array(10)
    for (let i = 0; i < notas.length; i++) {
        notas[i] = parseFloat(prompt(`Escribe la nota del alumno ${i + 1}`))
    }
    let aprobados = notas.filter((aprobado) => aprobado >= 5)
    let suspensos = notas.filter((suspenso) => suspenso < 5)
    alert(`Las notas son: ${notas} y hay ${aprobados.length} aprobados, y ${suspensos.length} suspensos`);
    
});

document.getElementById("ej4").addEventListener("click", function () {
    let cantidad = parseFloat(prompt("Dime cuantas alturas quieres introducir "))
    let alturas = new Array(cantidad)
    let suma = 0
    for (let i = 0; i < alturas.length; i++) {
        alturas[i] = parseFloat(prompt(`Escribe la altura de la persona ${i + 1}`))
    }
    for (let i = 0; i < alturas.length; i++) {
        suma += alturas[i]
    }
    let promedio = suma/alturas.length
    alert(`Las medias de las alturas son ${promedio.toFixed(2)} metros`);
});

document.getElementById("ej5").addEventListener("click", function () {
    let cantidad = parseFloat(prompt("Dime cuantos trabajadores quieres introducir "))
    let chambeadores = new Array(cantidad)
    for (let i = 0; i < chambeadores.length; i++) {
        chambeadores[i] = parseFloat(prompt(`Escribe la paga del negro ${i + 1}`))
        if (chambeadores[i] > 1000 || chambeadores[i] < 100) {
            alert("pago no valido")
            i--
        }
    }

    let ganan = chambeadores.filter((gana) => gana >= 500)
    let noGanan = chambeadores.filter((no) => no < 500)
    let gasto = chambeadores.reduce((acumulador, posActual) => acumulador + posActual, 0)
    alert(`El gasto de la empresa en sus trabajadores es: ${gasto}
            y hay ${ganan.length} que ganan mas de 500 y
            ${noGanan.length} que ganan menos de 500`);
});

document.getElementById("ej6").addEventListener("click", function () {
    let numeros = new Array(25)
    for (let index = 1; index < numeros.length; index++) {
        numeros[index] = index
    }
    let juntos = numeros.map(valor => {
        return(`${valor}${valor}`) 
    })
    alert(juntos);
});

document.getElementById("ej7").addEventListener("click", function () {
    //en este ejemplo se usara slice y reduce
    let valores = new Array(10)
    for (let i = 0; i < valores.length; i++) {
        valores[i] = parseFloat(prompt(`Ingresa la posicion ${i+1}`))
    }
    let ultimosCinco = valores.slice(-5)
    let suma = ultimosCinco.reduce((acumulador, valor) => acumulador + valor,0)

    alert(`La suma de los ultimos 5 es: ${suma}`)
});

document.getElementById("ej8").addEventListener("click", function () {
    let numero = parseFloat(prompt("Ingresa un numeo del 1 al 10"))
    let resultado = ""
    for (let i = 0; i <= 10; i++) {
        resultado += `${numero} * ${i} = ${numero*i} / `
    }
    alert(resultado)
});

document.getElementById("ej9").addEventListener("click",() => {
    let vueltas = parseFloat(prompt("¿Cuántas veces vas a introducir las coordenadas?"));
    let puntos = [];
    
    for (let i = 0; i < vueltas; i++) {
        let posX = parseFloat(prompt(`Ingresa la coordenada X del punto ${i + 1}`));
        let posY = parseFloat(prompt(`Ingresa la coordenada Y del punto ${i + 1}`));
        puntos.push([posX, posY]);
    }

    let cuadranteI = 0;
    let cuadranteII = 0;
    let cuadranteIII = 0;
    let cuadranteIV = 0;
    
    // Recorrer el array de puntos
    puntos.forEach(punto => {
        let x = punto[0];
        let y = punto[1];
    
        if (x > 0 && y > 0) {
            cuadranteI++; // Punto en Cuadrante I
        } else if (x < 0 && y > 0) {
            cuadranteII++; // Punto en Cuadrante II
        } else if (x < 0 && y < 0) {
            cuadranteIII++; // Punto en Cuadrante III
        } else if (x > 0 && y < 0) {
            cuadranteIV++; // Punto en Cuadrante IV
        }
    });
    
    // Mostrar resultados
    alert(`Puntos en Cuadrante I: ${cuadranteI}
    Puntos en Cuadrante II: ${cuadranteII}
    Puntos en Cuadrante III: ${cuadranteIII}
    Puntos en Cuadrante IV: ${cuadranteIV}`);
});

document.getElementById("ej10").addEventListener("click", function () {
    let vueltas = parseFloat(prompt("¿Cuántas veces vas a introducir los lados?"));
    let triangulos = [];
    
    for (let i = 0; i < vueltas; i++) {
        let ladoA = parseFloat(prompt(`Ingresa el lado A del triangulo ${i + 1}`));
        let ladoB = parseFloat(prompt(`Ingresa el lado B del triangulo ${i + 1}`));
        let ladoC = parseFloat(prompt(`Ingresa el lado C del triangulo ${i + 1}`));
        triangulos.push([ladoA, ladoB, ladoC]);
    }

    let iso = 0;
    let equi = 0;
    let esca = 0;
    
    triangulos.forEach(triangulo => {
        let ladoA = triangulo[0];
        let ladoB = triangulo[1];
        let ladoC = triangulo[2];
    
        if (ladoA == ladoB && ladoB == ladoC && ladoA == ladoC) {
            equi++; 
        } else if (ladoA == ladoB || ladoC == ladoB || ladoA == ladoC) {
            iso++; 
        } else if (ladoA != ladoB && ladoB != ladoC || ladoA != ladoC) {
            esca++; 
        }
    });
    
    alert(`Puntos en Isosceles: ${iso}
    Puntos en Escaleno: ${esca}
    Puntos en Equilatero: ${equi}`);
});

document.getElementById("ej11").addEventListener("click", function () {
let productoOferta = prompt("Ingrese el nombre del producto en oferta 3x2:");
let productos = [];
let continuar = true;
while (continuar) {
    let nombre = prompt("Ingrese el nombre del producto (o escriba 'fin' para terminar):");
    if (nombre.toLowerCase() === "fin") {
        continuar = false;
    } else {
        let cantidad = parseFloat(prompt("Ingrese la cantidad:"));
        let precio = parseFloat(prompt("Ingrese el precio unitario:"));
        productos.push({ nombre, cantidad, precio });
    }
}
let totalFactura = 0;
let ahorroTotal = 0;
productos.forEach(producto => {
    let { nombre, cantidad, precio } = producto;
    let costoProducto = cantidad * precio;
    if (nombre === productoOferta) {
        let gruposDeTres = Math.floor(cantidad / 3); 
        let unidadesPagadas = (gruposDeTres * 2) + (cantidad % 3); 
        let ahorro = (cantidad - unidadesPagadas) * precio; 
        costoProducto = unidadesPagadas * precio; 
        ahorroTotal += ahorro; 
    }
    totalFactura += costoProducto; 
});

alert(`Total de la factura: $${totalFactura.toFixed(2)} Ahorro total: $${ahorroTotal.toFixed(2)}`);
});
