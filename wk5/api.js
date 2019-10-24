//build questions array
const questions = [
    {
        question: "Is the allosaurus a carnivore?",
        answers: {
            a: "true",
            b: "false"
        },
        correctanswer: "a"
    },
    {
        question: "What time period is the ichthyosaurus from?",
        answers: {
            a: "Jurassic",
            b: "Cretaceous"
        },
        correctanswer: "a"
    },
    {
        question: "Which of these is the styracosaurus?",
        answers: {
            a: "<img class='smIcn' src='img/styracosaurus.png' alt='styracosaurus pic'>",
            b: "<img class='smIcn' src='img/guanlong.png' alt='guanlong pic'>"
        },
        correctanswer: "a"
    },
    {
        question: "What is the lambeosaurus's diet?",
        answers: {
            a: "herbivore",
            b: "carnivore"
        },
        correctanswer: "a"
    },
    {
        question: "Is the velociraptor from the Jurassic time period?",
        answers: {
            a: "true",
            b: "false"
        },
        correctanswer: "b"
    }   
]

//dynamically build quiz
function buildQuiz() {

    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {
    
          const answers = [];
    
          for(letter in currentQuestion.answers){
    
            answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          
          output.push(
            `<h3 class="question"> ${currentQuestion.question} </h3>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
    
      quizContainer.innerHTML = output.join('');

}

//grab HTML items
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//get local storage string and parse into array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//show results
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;
  
    let username = document.getElementById('name');

    questions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
      if(userAnswer===currentQuestion.correctanswer){
        numCorrect++;
        }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

      const score = {
          score: numCorrect,
          name: username.value
      };

      highScores.sort( (a,b) => b.score - a.score);

      //create local storage array and change into a string
      localStorage.setItem("highScores", JSON.stringify(highScores));

      highScores.push(score);

      //display local storage high scores
      resultsContainer.innerHTML = 
      highScores.map( score => {
        return `<li class="topScore">${score.name} -- ${score.score}</li>` ;
      })
      .join("");
}

//function to build quiz on load
buildQuiz();

//event listener that displays high scores
submitButton.addEventListener('click', showResults);

