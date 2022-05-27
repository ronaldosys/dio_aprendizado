/* let array = ['string', 1, true, ['array', 'ronaldo'], ['array2', 'ronaldo'],['array3', 'ronaldo']];  // criando array com varios tipos de items
console.log(array[3]);

array.forEach(
    function(item, index){
        console.log(item, index);
    });

array.push('Notebook'); // adiciona um item no array
console.log(array);

array.pop(); // retira item do final do array
console.log(array);

array.shift(); // retira item do inicio do array
console.log(array);

array.unshift('Fanfarras'); // adiciona um item no inicio do array
console.log(array);

console.log(array.indexOf(true)); // indexof retorna o indice de um item no array

array.splice(0,3); // splice ele apaga items do array em um range passado por parametro
console.log(array);

let newArray = array.slice(0,3); // ele pega itens de um array no range definido no parametro
console.log(newArray); */

let object = { string: 'Texto', number: 1, boolean: true, array:["TextoArray"], objectInterno: { objectInterno: 'Objeto Interno'}};
console.log(object.objectInterno);

/* var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);