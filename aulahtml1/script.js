var numeroSecreto;
var tentativas;

function iniciarJogo(){
  numeroSecreto = Math.floor(Math.random() *100) +1;
  tentativas = 0;
  document.getElementById("message").textContent = "";
}

function checkGuess(){
  var palpite = parseInt(document.getElementById("guessField").value);
  var message = document.getElementById("message");


  if(isNaN(palpite) || palpite < 1 || palpite > 100){
    message.textContent = "Por favor insira um numero valido entre 1 e 100";
    return;
  }

  tentativas++;

  if (palpite == numeroSecreto) {
      message.textContent = "Parabens! você acertou o numero em " + tentativas + " tentativas.";     
  }else if(palpite < numeroSecreto){
      message.textContent = "Tente um numero maior.";
  }else{
    message.textContent = "tente um  numero menor";
  }

}

function resetGame(){
  document.getElementById("guessField").value = "";
  iniciarJogo();
}

window.onload = iniciarJogo;