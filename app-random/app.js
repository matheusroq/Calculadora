let rand = Math.floor(Math.random() * 100) + 1


const input = document.querySelector('#input');
const button = document.querySelector('#button');
let resultado = document.querySelector('.resultado');
let baixoOuAlto = document.querySelector('.baixoOuAlto');
let count = 1;

button.addEventListener('click', (e) => {
    e.preventDefault();
    
        checkGuess();
        input.value = '';
});


function checkGuess() {

    let value = Number(input.value);
    
    let palpites = document.querySelector('.palpites');
    

    if (count === 1) {
        palpites.value = 'Palpites anteriores: ';
      }
      palpites.value += value + ' ';
      
        if(value == rand) {
            resultado.innerHTML = 'Você acertou!!'
            resultado.style.backgroundColor = 'green';
            baixoOuAlto.value = '';
            configFimDeJogo();
        } else if(count === 10) {
            resultado.innerHTML = 'Fim de jogo!!!!!';
            configFimDeJogo();
        }else {
            resultado.innerHTML = 'Você errou. :(';
            resultado.style.backgroundColor = 'red';
            if(value < rand) {
                baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
              } else if(value > rand) {
                baixoOuAlto.textContent = 'Seu palpite está muito alto!';
              }
        }
        
        count++;
    console.log(rand)
    
}
let botaoReinicio;

function configFimDeJogo() {
    input.disabled = true;
    button.disabled = true;
    baixoOuAlto.textContent = '';
    botaoReinicio = document.createElement('button');
    botaoReinicio.innerHTML = 'Iniciar novo jogo';
    botaoReinicio.className = 'btn btn-warning'
    let container = document.querySelector('.container');
    container.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', (e) => {
        e.preventDefault();
        resultado.innerHTML ='';
        reiniciarJogo();
    }); 
  }


    function reiniciarJogo() {
      count = 1;

      let reiniciar = document.querySelectorAll('.resultadoParas p');
      for(let i; i < reiniciar.length; i++) {
          reiniciar[i].value = '';
      }

      botaoReinicio.parentNode.removeChild(botaoReinicio);

      input.disabled = false;
      button.disabled = false;
      input.value = '';
      input.focus();

      rand = Math.floor(Math.random() * 100) + 1
    
       
  } 