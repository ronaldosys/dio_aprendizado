

function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");
        if(typeof(arr) != 'object') throw new TypeError("Array Precisa ser do Tipo Object");
        if(typeof(num) != 'number') throw new TypeError("Numero Precisa ser do Tipo Number");
        if(arr.length !== num) throw new RangeError("Tamanho Invalido");

        return arr;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Erro reference error");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Erro Type error");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Erro Range error");
            console.log(e.message);
        }else{
            console.log("Nenhum dos erros tradados, Erro: " + e.name);
        }
    }
    
   
   
}

console.log(validaArray([],5));