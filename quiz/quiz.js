const formquiz = document.querySelector('.quiz-form');
const checkBtn = document.querySelector('#check');
const display = document.querySelector('#output');

const correctAnswers = ['Equilateral', 'Hypotenuse', 'Trignometry', 'Pythagoras', 'Equal'];

checkBtn.addEventListener('click', calculateScore);

function calculateScore() {
    
    let index = 0;
    let score = 0;
    const formResults = new FormData(formquiz);

    for(let value of formResults.values())  {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    
    display.innerHTML = "Your score is "+ score;
  }