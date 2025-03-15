document.getElementById("ej1").addEventListener("click", () => {
    function mayor(a,b){
        if(a>b){
            return a
        }else{
            return b
        }
    }

    let num1 = parseFloat(prompt("Numero 1"))
    let num2 = parseFloat(prompt("Numero 2"))

    alert(mayor(num1,num2))

})

document.getElementById("ej2").addEventListener("click", () => {
    const trans = (min) => min * 60 //muchisimo pero muchisimo mas resumido
    let min = parseFloat(prompt("que vas a transformar"))
    alert(trans(min))
})

document.getElementById("ej3").addEventListener("click", () => {
    function sumarArray(array){
        return array.reduce((a, v) => a + v)
    }
    console.log(sumarArray([1,2,3,4]));
    
})

document.getElementById("ej4").addEventListener("click", () => {
    const palabra = prompt("Que palabra vas a transformar")
    const palabraM = (p) => p.toUpperCase()
    alert(palabraM(palabra))
})

document.getElementById("ej5").addEventListener("click", () => {
    function esPrimo(numero) {
        if (numero <= 1) return false;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) return false;
        }
        return true;
        }
      console.log(esPrimo(7)); // true
      console.log(esPrimo(10)); // false
})