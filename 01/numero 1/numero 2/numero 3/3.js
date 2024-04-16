function crecimiento5(){

let contador = 0;
let array = [];

while (contador <=20){
    array.push(contador);
    contador +=2   
}
    

   document.getElementById("lista").innerHTML = ` primeros 1o numeros pares : <br> <h1>${array}</h1> `
}