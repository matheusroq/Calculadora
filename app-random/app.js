let rand = Math.floor(Math.random() * 100) + 1


const input = document.querySelector('#input');
const button = document.querySelector('#button');
let result = document.querySelector('.result');
let clues = document.querySelector('.clues');
let count = 1;

button.addEventListener('click', (e) => {
    e.preventDefault();
    
        checkGuess();
        input.value = '';
});


function checkGuess() {

        let value = Number(input.value);
      
        if(value == rand) {
            result.innerHTML = 'Você acertou!!'
            result.style.backgroundColor = 'green';
            clues.value = '';
            configFimDeJogo();
        } else if(count === 10) {
            result.innerHTML = 'Fim de jogo!!!!!';
            configFimDeJogo();
        }else {
            result.innerHTML = 'Você errou. :(';
            result.style.backgroundColor = 'red';
            if(value < rand) {
                clues.textContent = 'Seu palpite está muito baixo!';
              } else if(value > rand) {
                clues.textContent = 'Seu palpite está muito alto!';
              }
        }
        
        count++;
       
    
}
let buttonRestart;

function configFimDeJogo() {
    input.disabled = true;
    button.disabled = true;
    clues.textContent = '';
    buttonRestart = document.createElement('button');
    buttonRestart.innerHTML = 'Iniciar novo jogo';
    buttonRestart.className = 'btn btn-warning'
    let container = document.querySelector('.container');
    container.appendChild(buttonRestart);
    buttonRestart.addEventListener('click', (e) => {
        e.preventDefault();
        result.innerHTML ='';
        restart();
    }); 
  }


    function restart() {
      count = 1;

      let restart = document.querySelectorAll('.text p');
      for(let i; i < restart.length; i++) {
          restart[i].value = '';
      }

      buttonRestart.parentNode.removeChild(buttonRestart);

      input.disabled = false;
      button.disabled = false;
      input.value = '';
      input.focus();

      rand = Math.floor(Math.random() * 100) + 1
    
       
  } 