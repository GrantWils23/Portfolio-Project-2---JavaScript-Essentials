


// GAME INSTRUCTIONS HELP MODAL // 

// Get the modal
var modal = document.getElementById("gameHelp");

// Get the button that opens the modal
var btn = document.getElementById("gameInstructions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// QUIZ QUESTIONS ARRAY
var quizQuestions = [
  {
    question: "What is the Capital of Germany?",
    answers: [
      {answer: "Paris", correct: false},
      {answer: "Amsterdam", correct: false},
      {answer: "Budapest", correct: false},
      {answer: "Berlin", correct: true}
    ],
    selectedValue: false,
  },
  {
    question: "What town do the Simspons live in?",
    answers: [
      {answer: "Springfield", correct: true},
      {answer: "Quahog", correct: false},
      {answer: "New York", correct:false},
      {answer: "Atlantas", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "What is Superman's weakness?",
    answers: [
      {answer: "Sausages", correct: false},
      {answer: "Kryptonite", correct: true},
      {answer: "Working at the Daily Planet", correct: false},
      {answer: "Samsonite", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "What does LED stand for?",
    answers: [
      {answer: "Light Emitting Diode", correct: true},
      {answer: "Light Emitting Danger", correct: false},
      {answer: "Light Energy Detected", correct: false},
      {answer: "Light Emitting Disc", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "Who helped co-write the lyrics to the hit song from Dire Straits 'Money for Nothing'?",
    answers: [
      {answer: "Neil Diamond", correct: false},
      {answer: "Bernie Taupe", correct: false},
      {answer: "Sting", correct: true},
      {answer: "Elton John", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "From which country would you find the following items from? Kielbasa, Pierogi, Barszcz, Wodka?",
    answers: [
      {answer: "Tialand",correct: false},
      {answer: "Russia", correct: false},
      {answer: "Hungary", correct: false},
      {answer: "Poland", correct: true}
    ],
    selectedValue: false,
  },
  {
    question: "How many neighbours does Russia Share their borders with? ",
    answers: [
      {answer: "12", correct: false},
      {answer: "14", correct: true},
      {answer: "16", correct: false},
      {answer: "18", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "How old was Wolfgang Amadeus Mozart when he died?",
    answers: [
      {answer: "35", correct: true},
      {answer: "45", correct: false},
      {answer: "65", correct: false},
      {answer: "75", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "What is the smallest Country in the World?",
    answers: [
      {answer: "San Marino", correct: false},
      {answer: "Monaco", correct: false},
      {answer: "Atlanta City", correct: false},
      {answer: "Vatican City", correct: true}
    ],
    selectedValue: false,
  },
  {
    question: "What is the speed of light?",
    answers: [
      {answer: "200102 miles per second", correct: false},
      {answer: "186000 miles per second", correct: true},
      {answer: "148000 miles per second", correct: false},
      {answer: "198000 miles per second", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "What would you use a deburrer for?",
    answers: [
      {answer: "To smooths edges and sides of manufactured parts", correct: true},
      {answer: "To open canned products", correct: false},
      {answer: "To test humidity in the air", correct: false},
      {answer: "To dig a hole in the ground", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "Which snake is not a poisonous?",
    answers: [
      {answer: "Black Mamba", correct: false},
      {answer: "Inland Taipan", correct: false},
      {answer: "Boa Constrictor", correct: false},
      {answer: "Cobra", correct: true}
    ],
    selectedValue: false,
  },
  {
    question: "Which snake is poisonous?",
    answers: [
      {answer: "Indian Krait", correct: true},
      {answer: "Burmese Python", correct: false},
      {answer: "Green Anaconda", correct: false},
      {answer: "Coin Snake", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "What is the tallest mountain on Earth?",
    answers: [
      {answer: "Mount Everest", correct: true},
      {answer: "Mount Rushmore", correct:false},
      {answer: "K2", correct: false},
      {answer: "Cho Oyu", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "What did Lamborghini make before it made Super Cars?",
    answers: [
      {answer: "Windows", correct: false},
      {answer: "Tractors", correct: true},
      {answer: "Furniture", correct: false},
      {answer: "Motorbikes", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "How many litres are in a gallon?",
    answers: [
      {answer: "3.90", correct: false},
      {answer: "5.12", correct: false},
      {answer: "4.55", correct: true},
      {answer: "4.23", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "Which English Football Team went a whole season unbeaten in the Premier League?",
    answers: [
      {answer: "Arsenal", correct: true},
      {answer: "Manchester United", correct: false},
      {answer: "Manchester City", correct: false},
      {answer: "Chelsea", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "How many Grand Slams has Roger Federer won up till 2021?",
    answers: [
      {answer: "22", correct: false},
      {answer: "21", correct: false},
      {answer: "20", correct: true},
      {answer: "23", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "How many legs does a ladybug have?",
    answers: [
      {answer: "4", correct: false},
      {answer: "8", correct: false},
      {answer: "10", correct: true},
      {answer: "6", correc: false}
    ],
    selectedValue: false,
  },
  {
    question: "Where can you find a timpani?",
    answers: [
      {answer: "Inside a car engine", correct: false},
      {answer: "In an orchestra", correct: true},
      {answer: "mixed in a bolognese sauce", correct: false},
      {answer: "Inside a jewellers tool box", correct: false}
    ], selectedValue: false,
  },
  {
    question: "How many lives does a cat have?",
    answers: [
      {answer: "One", correct: true},
      {answer: "None", correct: false},
      {answer: "Nine", correct: false},
      {answer: "Twentyfour", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "Who Played James Bond in 'You Only Live Twice'?",
    answers: [
      {answer: "Roger Moore", correct: false},
      {answer: "Sean Connery", correct: true},
      {answer: "Piers Brosnan", correct: false},
      {answer: "Daniel Craig", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "What film is the character 'Doctor Evil' well known from?",
    answers: [
      {answer: "The Fantastic Four", correct: false},
      {answer: "Dr No", correct: false},
      {answer: "Austin Powers", correct: true},
      {answer: "Dispicable Me", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "When did the UK fully ban the use of Asbestos?",
    answers: [
      {answer: "1970", correct: false},
      {answer: "1980", correct: false},
      {answer: "1990", correct: false},
      {answer: "2000", correct: true}
    ], selectedValue: false,
  },
  {
    question: "Who created the character 'Winnie the Pooh'?",
    answers: [
      {answer: "A.A. Milne", correct: true},
      {answer: "Walt Disney", correct: false},
      {answer: "Michael Bond", correct: false},
      {answer: "Mary Tourtel", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "How many times has the TV show 'Family Guy' been cancelled?",
    answers: [
      {answer: "0", correct: false},
      {answer: "2", correct: true},
      {answer: "1", correct: false},
      {answer: "3", correct: false}
    ],
    selectedValue: false,
  },
  {
    question: "Who was supposed to play the T-1000 in 'Terminator 2; Judgement Day' before Robert Patrick took up the role?",
    answers: [
      {answer: "Bill Murray", correct: false}, 
      {answer: "Carl Weathers", correct: false},
      {answer: "Billy Idol", correct: true},
      {answer: "Jean Claude Van Damme", correct: false}
    ],
    selectedValue: false,
  },
]



const startButton = document.getElementById("start-game");
startButton.addEventListener("click", startGame);

var selectedValue = null;
let mutableList = quizQuestions;
let randomQuestions = [];
let currentQuestionNumberIndex = 1;



// START GAME //
function startGame() {
  console.log("started")
  startButton.classList.add("hide");
  document.getElementById("question").classList.remove("hide");
  document.getElementById("answer-buttons").classList.remove("hide");

  let i = 0;
  while ( i < 10 ) {
    let randomQuestionNumber = Math.floor(Math.random() * mutableList.length); // Random Question number drawn from the arrays length
    let randomQuestion = mutableList.splice(randomQuestionNumber, 1);  //Random Question drawn from the list of Questions and added into new array
    let striptedQuestion = randomQuestion[0]; // returns a stripped question outside of an array
    randomQuestions.push(striptedQuestion); // push the stripped uestion into the list of 10 questions for the game;
    i++;
  };
  console.log(randomQuestions);

  let question = randomQuestions.pop(); // get first question from the random question list
  // console.log(question.answers[0].a)
  displayQuestion(question);

};



// DISPLAY QUESTION //
function displayQuestion(question) {
    

    let theQ = document.getElementById("question"); // display question
  theQ.innerHTML = question.question;
 
  let questionNumber = document.getElementById("question-number"); // display question number
  questionNumber.innerHTML = currentQuestionNumberIndex;

  let a = document.getElementsByClassName("btn")[0]; // display answers in button fields
  a.innerHTML = question.answers[0].answer;
  let b = document.getElementsByClassName("btn")[1];
  b.innerHTML = question.answers[1].answer;
  let c = document.getElementsByClassName("btn")[2];
  c.innerHTML = question.answers[2].answer;
  let d = document.getElementsByClassName("btn")[3];
  d.innerHTML = question.answers[3].answer;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

// CLICK AND TOGGLE THE ANSWER BUTTONS
function answerSelected(event) {
  selectedValue = null;
  selectedValue = this.innerHTML;
  console.log(selectedValue);
  return selectedValue;
}

function answerHighlighted(event) {
 this.style.backgroundColor = "teal";
}

function resetBackgroundColor() {
  let buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
  button = buttons[i].style.backgroundColor = "darkseagreen";
  }
}

let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i].addEventListener("click", answerSelected);
  button = buttons[i].addEventListener("click", resetBackgroundColor);
  button = buttons[i].addEventListener("click", answerHighlighted);
};


//////////////////////////////////////////////////////////////////////////////////////////////////////

// SUBMIT ANSWER & TO NEXT QUESTION//
// function submitAnswer(event) {
//   let buttons = document.getElementsByTagName("button");
//   for (let button of buttons) {
//     button.addEventListener("click", function() {
//       if (this.getAttribute("data-type") === "submit") {
//         checkAnswer();
//      } 
//     })
//   }

//   currentQuestionNumberIndex++;
// };

// ANSWER BOX SELECTED
function answerBoxSelected(event) {

} 

// CHECK WHEN REACHED 10 QUESIIONS THAT WILL END GAME AND WILL RETURN THE SCORE;
// function checkAnswer(event) {
//   let button
//   if (this.data-type === question.correctAnswer) {

//   }

// }


// KEEP TRACK OF QUESTION NUMBER //
// function questionTracker() {}




