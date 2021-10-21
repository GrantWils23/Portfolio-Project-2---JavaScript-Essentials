


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
      {a: "Paris", correct: false},
      {b: "Amsterdam", correct: false},
      {c: "Budapest", correct: false},
      {d: "Berlin", correct: true}
    ]
  },
  {
    question: "What town do the Simspons live in?",
    answers: [
      {a: "Springfield", correct: true},
      {b: "Quahog", correct: false},
      {c: "New York", correct:false},
      {d: "Atlantas", correct: false}
    ]
  },
  {
    question: "What is Superman's weakness?",
    answers: [
      {a: "Sausages", correct: false},
      {b: "Kryptonite", correct: true},
      {c: "Working at the Daily Planet", correct: false},
      {d: "Samsonite", correct: false}
    ]
  },
  {
    question: "What does LED stand for?",
    answers: [
      {a: "Light Emitting Diode", correct: true},
      {b: "Light Emitting Danger", correct: false},
      {c: "Light Energy Detected", correct: false},
      {d: "Light Emitting Disc", correct: false}
    ]
  },
  {
    question: "Who helped co-write the lyrics to the hit song from Dire Straits 'Money for Nothing'?",
    answers: [
      {a: "Neil Diamond", correct: false},
      {b: "Bernie Taupe", correct: false},
      {c: "Sting", correct: true},
      {d: "Elton John", correct: false}
    ]
  },
  {
    question: "From which country would you find the following items from? Kielbasa, Pierogi, Barszcz, Wodka?",
    answers: [
      {a: "Tialand",correct: false},
      {b: "Russia", correct: false},
      {c: "Hungary", correct: false},
      {d: "Poland", correct: true}
    ]
  },
  {
    question: "How many neighbours does Russia Share their borders with? ",
    answers: [
      {a: "12", correct: false},
      {b: "14", correct: true},
      {c: "16", correct: false},
      {d: "18", correct: false}
    ]
  },
  {
    question: "How old was Wolfgang Amadeus Mozart when he died?",
    answers: [
      {a: "35", correct: true},
      {b: "45", correct: false},
      {c: "65", correct: false},
      {d: "75", correct: false}
    ]
  },
  {
    question: "What is the smallest Country in the World?",
    answers: [
      {a: "San Marino", correct: false},
      {b: "Monaco", correct: false},
      {c: "Atlanta City", correct: false},
      {d: "Vatican City", correct: true}
    ]
  },
  {
    question: "What is the speed of light?",
    answers: [
      {a: "200102 miles per second", correct: false},
      {b: "186000 miles per second", correct: true},
      {c: "148000 miles per second", correct: false},
      {d: "198000 miles per second", correct: false}
    ]
  },
  {
    question: "What would you use a deburrer for?",
    answers: [
      {a: "To smooths edges and sides of manufactured parts", correct: true},
      {b: "To open canned products", correct: false},
      {c: "To test humidity in the air", correct: false},
      {d: "To dig a hole in the ground", correct: false}
    ]
  },
  {
    question: "Which snake is not a poisonous?",
    answers: [
      {a: "Black Mamba", correct: false},
      {b: "Inland Taipan", correct: false},
      {c: "Boa Constrictor", correct: false},
      {d: "Cobra", correct: true}
    ]
  },
  {
    question: "Which snake is poisonous?",
    answers: [
      {a: "Indian Krait", correct: true},
      {b: "Burmese Python", correct: false},
      {c: "Green Anaconda", correct: false},
      {d: "Coin Snake", correct: false}
    ]
  },
  {
    question: "What is the tallest mountain on Earth?",
    answers: [
      {a: "Mount Everest", correct: true},
      {b: "Mount Rushmore", correct:false},
      {c: "K2", correct: false},
      {d: "Cho Oyu", correct: false}
    ]
  },
  {
    question: "What did Lamborghini make before it made Super Cars?",
    answers: [
      {a: "Windows", correct: false},
      {b: "Tractors", correct: true},
      {c: "Furniture", correct: false},
      {d: "Motorbikes", correct: false}
    ]
  },
  {
    question: "How many litres are in a gallon?",
    answers: [
      {a: "3.90", correct: false},
      {b: "5.12", correct: false},
      {c: "4.55", correct: true},
      {d: "4.23", correct: false}
    ]
  },
  {
    question: "Which English Football Team went a whole season unbeaten in the Premier League?",
    answers: [
      {a: "Arsenal", correct: true},
      {b: "Manchester United", correct: false},
      {c: "Manchester City", correct: false},
      {d: "Chelsea", correct: false}
    ]
  },
  {
    question: "How many Grand Slams has Roger Federer won up till 2021?",
    answers: [
      {a: "22", correct: false},
      {b: "21", correct: false},
      {c: "20", correct: true},
      {d: "23", correct: false}
    ]
  },
  {
    question: "How many legs does a ladybug have?",
    answers: [
      {a: "4", correct: false},
      {b: "8", correct: false},
      {c: "10", correct: true},
      {d: "6", correc: false}
    ]
  },
  {
    question: "Where can you find a timpani?",
    answers: [
      {a: "Inside a car engine", correct: false},
      {b: "In an orchestra", correct: true},
      {c: "mixed in a bolognese sauce", correct: false},
      {d: "Inside a jewellers tool box", correct: false}
    ]
  },
  {
    question: "How many lives does a cat have?",
    answers: [
      {a: "One", correct: true},
      {b: "None", correct: false},
      {c: "Nine", correct: false},
      {d: "Twentyfour", correct: false}
    ]
  },
  {
    question: "Who Played James Bond in 'You Only Live Twice'?",
    answers: [
      {a: "Roger Moore", correct: false},
      {b: "Sean Connery", correct: true},
      {c: "Piers Brosnan", correct: false},
      {d: "Daniel Craig", correct: false}
    ]
  },
  {
    question: "What film is the character 'Doctor Evil' well known from?",
    answers: [
      {a: "The Fantastic Four", correct: false},
      {b: "Dr No", correct: false},
      {c: "Austin Powers", correct: true},
      {d: "Dispicable Me", correct: false}
    ]
  },
  {
    question: "When did the UK fully ban the use of Asbestos?",
    answers: [
      {a: "1970", correct: false},
      {b: "1980", correct: false},
      {c: "1990", correct: false},
      {d: "2000", correct: true}
    ]
  },
  {
    question: "Who created the character 'Winnie the Pooh'?",
    answers: [
      {a: "A.A. Milne", correct: true},
      {b: "Walt Disney", correct: false},
      {c: "Michael Bond", correct: false},
      {d: "Mary Tourtel", correct: false}
    ]
  },
  {
    question: "How many times has the TV show 'Family Guy' been cancelled?",
    answers: [
      {a: "0", correct: false},
      {b: "2", correct: true},
      {c: "1", correct: false},
      {d: "3", correct: false},
    ]
  },
  {
    question: "Who was supposed to play the T-1000 in 'Terminator 2; Judgement Day' before Robert Patrick took up the role?",
    answers: [
      {a: "Bill Murray", correct: false}, 
      {b: "Carl Weathers", correct: false},
      {c: "Billy Idol", correct: true},
      {d: "Jean Claude Van Damme", correct: false}
    ]
  },
]



const startButton = document.getElementById("start-game");
startButton.addEventListener("click", startGame);


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
  displayQuestion();

};



// DISPLAY QUESTION //
function displayQuestion() {
    
  let question = randomQuestions.pop(); // get first question from the random question list

  let theQ = document.getElementById("question");
  theQ.innerHTML = question.question;

  let btnA = document.getElementById("btnA");
  btnA.innerHTML = question.answers.a;
  
  let btnB = document.getElementById("btnB");
  btnB.innerHTML = question.answers.b;

  let btnC = document.getElementById("btnC");
  btnC.innerHTML = question.answers.c;

  let btnD = document.getElementById("btnD");
  btnD.innerHTML = question.answers.d;

  let questionNumber = document.getElementById("question-number");
  questionNumber.innerHTML = currentQuestionNumberIndex;
};


// SUBMIT ANSWER & TO NEXT QUESTION//
function submitAnswer(event) {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswer();
     } 
    })
  }

  currentQuestionNumberIndex++;
};

// ANSWER BOX SELECTED
// function answerBoxSelected(event) {

// } 

// CHECK WHEN REACHED 10 QUESIIONS THAT WILL END GAME AND WILL RETURN THE SCORE;
// function checkAnswer(event) {
//   let button
//   if (this.data-type === question.correctAnswer) {

//   }

// }


// KEEP TRACK OF QUESTION NUMBER //
function questionTracker() {

}