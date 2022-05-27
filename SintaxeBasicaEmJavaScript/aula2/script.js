//Tipos de Variaveis

//boolean
/* var vOuF = false;
console.log(vOuF);

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Ronaldo';
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

//como declarar
var variavel = 'Ronaldo';
variavel = 'junior';
console.log(variavel); */

/* let variavel = 'ROnaldo';
variavel = 'Brilha muito';
console.log(variavel); */

/* const variavel = 'Ronald';
//variavel = 'Bronald' nao pode alterar uma constante
console.log(variavel); */

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();
