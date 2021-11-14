// var nome = "joão";

// console.log(nome.length);

// var number = 3;

// console.log(number)

// if(nome.length > number) {
//     console.log("tipe string <")
// } else {
//     console.log("tipe number >")
// }

var vitamina = ["banana", "maça", "melão"];

var buleano = true

if(vitamina.length == 3) {
    console.log("salada de fruta: "+ vitamina.join(', '));
} else if(vitamina.push('laranja') && vitamina.length >= 4) {
    console.log("adicionado frutas: "+vitamina.push('laranja'));
}