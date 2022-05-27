function obterNumeros(){
    let n1 = Number(prompt("Insira o primeiro numero:"));
    let n2 = Number(prompt("Insira o primeiro numero:"));
    var mensagem = `Os numeros ${n1} e ${n2} ` + saoIguais(n1,n2);
    var mensagem2 = `Sua Soma é ` + somaNumeros(n1,n2);
    var mensagem3 = `Soma ` + entreDezEVinte(n1,n2);
    alert(`${mensagem} , ${mensagem2}, ${mensagem3} `);
    
}

function saoIguais(num1, num2){
    
    if(num1 === num2){
        return "São iguais";
    }else{
        return "Não são iguais";
    }

}

function somaNumeros(num1, num2){
    
    var soma;
    soma = num1 + num2;
    return soma;
    
}

function entreDezEVinte(num1, num2){
    soma = somaNumeros(num1, num2);
    if (soma < 10){
        return "é menor que 10 e Menor que 20";
    }else if(soma < 20){
        return "é maior que 10 e Menor que 20";
    }else{
        return "é maior que 10 e maior que 20";
    }
}

obterNumeros();