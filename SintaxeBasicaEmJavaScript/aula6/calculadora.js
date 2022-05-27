function calculadora(){
    const operacao = prompt('Escolha uma Operação:\n 1-Soma + \n 2-Subtração - \n 3-Multiplicação * \n 4-Divisão / \n5-Divisao Inteira % \n6-Potenciação **');
    console.log(operacao);

    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
    }

    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
    }

    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`${n1} divisao Inteira ${n2} = ${resultado}`);
    }

    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`);
    }

    //funcao novaOperacao
    if(operacao == 1){
        soma();
    }else if(operacao == 2){
        subtracao();
    }else if(operacao == 3){
        multiplicacao();
    }else if(operacao == 4){
        divisaoReal();
    }else if(operacao == 5){
        divisaoInteira();
    }else if(operacao == 6){
        potenciacao();
    }else{
        alert('opção invalida!!!');
    }
}

calculadora();