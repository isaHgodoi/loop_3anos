
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Onde podemos levar noso animalzinho quando eles estão doentes?");

    
    if (respostaTime.toLowerCase() === "Podemos levá-los no veteririo") {
      alert("Isso mesmo! No veterinario!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Inincorreto! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
