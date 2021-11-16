let calcular = document.querySelector('#calcular');

function imc(){
    let nome = document.querySelector('#nome').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let res = document.querySelector('.res');
    let calculoImc = (peso / (altura * altura)).toFixed(1);
    let classificacao = '';

    if(nome !== '' && altura !== '' && peso !== ''){
        if(calculoImc < 18.5){
            classificacao = 'abaixo do peso'
        }else if(calculoImc < 25){
            classificacao = 'peso ideal'
        }else if(calculoImc < 30){
            classificacao = 'levemente acima do peso'
        }else if(calculoImc < 35){
            classificacao = 'com obesidade nivel 1'
        }else if(calculoImc < 40){
            classificacao = 'com obesidade nivel 2'
        }else{
            classificacao = 'com obesidade nivel 3'
        }
        

        res.innerHTML = `Olá ${nome} seu IMC é ${calculoImc} você está ${classificacao}!`
    }else{
        alert('Preencha todos os campos!!');
    }
}
calcular.addEventListener('click', imc);