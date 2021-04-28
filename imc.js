
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura));
        const mensagem = "Seu Índice de massa corporal é de: "
        let classificacao = '';


        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        } else if(valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!!'
        } else if(valorIMC < 30 ) {
            classificacao = 'levemente acima do peso.'
        } else if(valorIMC < 35){
            classificacao = 'com obesidade grau 1'
        } else if( valorIMC < 40){
            classificacao = 'com obesidade grau 2'
        } else {
            classificacao = 'com obesidade grau 3. Cuidado!'
        }

        
        resultado.textContent = `${nome}, ${mensagem}  ${valorIMC.toFixed(2)}, você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preenchimento inválido'
    }

}

calcular.addEventListener('click', imc);

