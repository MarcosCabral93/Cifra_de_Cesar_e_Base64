var botaoCode = document.querySelector('#push')//botao 
var cod=document.querySelector('#Criptografar').value;
var dec =document.querySelector('#Descriptografar').value

function codificacao() {
    var escolha = document.querySelector('#selecao')
    if (document.querySelector('#selecao').value == "cesar") { // Se escolher Cesar, Ele já chama a funçao Cesar
        escolha.style.backgroundColor="brown";
        escolha.style.color="white";
        escolha.style.fontWeight="bold"
        document.getElementById('incremento').style.display = "block"
        document.querySelector(".textoEntradaC").style.display="block"
        document.querySelector(".textoEntrada").style.display="none"
        document.querySelector('#txtConvertidoC').style.display="block"
        document.querySelector('#txtConvertido').style.display="none"
        
    }
    else if(document.querySelector('#selecao').value == "64"){
        //escondendo o inccremento
        escolha.style.backgroundColor="chartreuse"
        escolha.style.color="white";
        escolha.style.fontWeight="bold"
        document.getElementById('incremento').style.display = "none"
        //alterando o recebedor de dados e exibição
        document.querySelector(".textoEntradaC").style.display="none"
        document.querySelector(".textoEntrada").style.display="block"
        document.querySelector('#txtConvertidoC').style.display="none"
        document.querySelector('#txtConvertido').style.display="block"

        
    }
    else{
        document.querySelector(".textoEntrada").style.display="block"
        document.querySelector(".textoEntradaC").style.display="none"
        document.querySelector('#txtConvertidoC').style.display="none"
        document.querySelector('#txtConvertido').style.display="block"
    }
}
function  ajusteEnvio() { //funcao para alternar o botão de envio
    var botaoCode = document.querySelector('#push')

    if (document.querySelector('#Descriptografar').checked){
    botaoCode.textContent = 'Decodificar e armazenar';
    botaoCode.style.display="block"
    
    }
    else if(document.querySelector('#Criptografar').checked){
        botaoCode.textContent = 'codificar e enviar';
        botaoCode.style.display="block"
    }
    else{
        botaoCode.style.display="none"
    }
}
//function envio(){//botão dentro so formulario já apaga todos os dados
