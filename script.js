const pegarBotoes = document.querySelectorAll('.btn-play');
const mostrarCaixa = document.querySelector('.caixa-exibida');
const fecharCaixa = document.querySelector('.fechar-caixa')

pegarBotoes[0].addEventListener('click',function(){
    mostrarCaixa.style.display = 'block';
});

pegarBotoes[1].addEventListener('click',function(){
    mostrarCaixa.style.display = 'block';
});

fecharCaixa.addEventListener('click',function(){
    mostrarCaixa.style.display = 'none';
});