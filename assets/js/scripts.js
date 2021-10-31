

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
      {answer: "Paris"},
      {answer: "Amsterdam"},
      {answer: "Budapest"},
      {answer: "Berlin"}
    ],
    correctAnswer: "Berlin",
  },
  {
    question: "What town do the Simspons live in?",
    answers: [
      {answer: "Springfield"},
      {answer: "Quahog"},
      {answer: "New York"},
      {answer: "Atlantas"}
    ],
    correctAnswer: "Springfield",
  },
  {
    question: "What is Superman's weakness?",
    answers: [
      {answer: "Sausages"},
      {answer: "Kryptonite"},
      {answer: "Working at the Daily Planet"},
      {answer: "Samsonite"}
    ],
    correctAnswer: "Kryptonite",
  },
  {
    question: "What does LED stand for?",
    answers: [
      {answer: "Light Emitting Diode"},
      {answer: "Light Emitting Danger"},
      {answer: "Light Energy Detected"},
      {answer: "Light Emitting Disc"}
    ],
    correctAnswer: "Light Emitting Diode",
  },
  {
    question: "Who helped co-write the lyrics to the hit song from Dire Straits 'Money for Nothing'?",
    answers: [
      {answer: "Neil Diamond"},
      {answer: "Bernie Taupe"},
      {answer: "Sting"},
      {answer: "Elton John"}
    ],
    correctAnswer: "Sting",
  },
  {
    question: "From which country would you find the following items from? Kielbasa, Pierogi, Barszcz, Wodka?",
    answers: [
      {answer: "Tialand"},
      {answer: "Russia"},
      {answer: "Hungary"},
      {answer: "Poland"}
    ],
    correctAnswer: "Poland",
  },
  {
    question: "How many neighbours does Russia Share their borders with? ",
    answers: [
      {answer: "12"},
      {answer: "14"},
      {answer: "16"},
      {answer: "18"}
    ],
    correctAnswer: "14",
  },
  {
    question: "How old was Wolfgang Amadeus Mozart when he died?",
    answers: [
      {answer: "35"},
      {answer: "45"},
      {answer: "65"},
      {answer: "75"}
    ],
    correctAnswer: "35",
  },
  {
    question: "What is the smallest Country in the World?",
    answers: [
      {answer: "San Marino"},
      {answer: "Monaco"},
      {answer: "Atlanta City"},
      {answer: "Vatican City"}
    ],
    correctAnswer: "Vatican City",
  },
  {
    question: "What is the speed of light?",
    answers: [
      {answer: "200102 miles per second"},
      {answer: "186000 miles per second"},
      {answer: "148000 miles per second"},
      {answer: "198000 miles per second"}
    ],
    correctAnswer: "186000 miles per second",
  },
  {
    question: "What would you use a deburrer for?",
    answers: [
      {answer: "Smooth edges and sides of manufactured parts"},
      {answer: "To open canned products"},
      {answer: "To test humidity in the air"},
      {answer: "To dig a hole in the ground"}
    ],
    correctAnswer: "Smooth edges and sides of manufactured parts",
  },
  {
    question: "Which snake is not a poisonous?",
    answers: [
      {answer: "Black Mamba"},
      {answer: "Inland Taipan"},
      {answer: "Boa Constrictor"},
      {answer: "Cobra"}
    ],
    correctAnswer: "Cobra",
  },
  {
    question: "Which snake is poisonous?",
    answers: [
      {answer: "Indian Krait"},
      {answer: "Burmese Python"},
      {answer: "Green Anaconda"},
      {answer: "Coin Snake"}
    ],
    correctAnswer: "Indian Krait",
  },
  {
    question: "What is the tallest mountain on Earth?",
    answers: [
      {answer: "Mount Everest"},
      {answer: "Mount Rushmore"},
      {answer: "K2"},
      {answer: "Cho Oyu"}
    ],
    correctAnswer: "Mount Everest",
  },
  {
    question: "What did Lamborghini make before it made Super Cars?",
    answers: [
      {answer: "Lorries"},
      {answer: "Tractors"},
      {answer: "Furniture"},
      {answer: "Motorbikes"}
    ],
    correctAnswer: "Tractors",
  },
  {
    question: "How many litres are in a gallon?",
    answers: [
      {answer: "3.90"},
      {answer: "5.12"},
      {answer: "4.55"},
      {answer: "4.23"}
    ],
    correctAnswer: "4.55",
  },
  {
    question: "Which English Football Team went a whole season unbeaten in the Premier League?",
    answers: [
      {answer: "Arsenal"},
      {answer: "Manchester United"},
      {answer: "Manchester City"},
      {answer: "Chelsea"}
    ],
    correctAnswer: "Arsenal",
  },
  {
    question: "How many Grand Slams has Roger Federer won up till 2021?",
    answers: [
      {answer: "22"},
      {answer: "21"},
      {answer: "20"},
      {answer: "23"}
    ],
    correctAnswer: "20",
  },
  {
    question: "How many legs does a ladybug have?",
    answers: [
      {answer: "4"},
      {answer: "8"},
      {answer: "10"},
      {answer: "6"}
    ],
    correctAnswer: "6",
  },
  {
    question: "Where can you find a timpani?",
    answers: [
      {answer: "Inside a car engine"},
      {answer: "In an orchestra"},
      {answer: "mixed in a bolognese sauce"},
      {answer: "Inside a jewellers tool box"}
    ],
     correctAnswer: "In an orchestra",
  },
  {
    question: "How many lives does a cat have?",
    answers: [
      {answer: "One"},
      {answer: "None"},
      {answer: "Nine"},
      {answer: "Twentyfour"}
    ],
    correctAnswer: "One",
  },
  {
    question: "Who Played James Bond in 'You Only Live Twice'?",
    answers: [
      {answer: "Roger Moore"},
      {answer: "Sean Connery"},
      {answer: "Piers Brosnan"},
      {answer: "Daniel Craig"}
    ],
    correctAnswer: "Sean Connery",
  },
  {
    question: "What film is the character 'Doctor Evil' well known from?",
    answers: [
      {answer: "The Fantastic Four"},
      {answer: "Dr No"},
      {answer: "Austin Powers"},
      {answer: "Dispicable Me"}
    ],
    correctAnswer: "Austin Powers",
  },
  {
    question: "When did the UK fully ban the use of Asbestos?",
    answers: [
      {answer: "1970"},
      {answer: "1980"},
      {answer: "1990"},
      {answer: "2000"}
    ],
    correctAnswer: "2000",
  },
  {
    question: "Who created the character 'Winnie the Pooh'?",
    answers: [
      {answer: "A.A. Milne"},
      {answer: "Walt Disney"},
      {answer: "Michael Bond"},
      {answer: "Mary Tourtel"}
    ],
    correctAnswer: "A.A. Milne",
  },
  {
    question: "How many times has the TV show 'Family Guy' been cancelled?",
    answers: [
      {answer: "0"},
      {answer: "2"},
      {answer: "1"},
      {answer: "3"}
    ],
    correctAnswer: "2",
  },
  {
    question: "Who was supposed to play the T-1000 in 'Terminator 2; Judgement Day' before Robert Patrick took up the role?",
    answers: [
      {answer: "Bill Murray"}, 
      {answer: "Carl Weathers"},
      {answer: "Billy Idol"},
      {answer: "Jean Claude Van Damme"}
    ],
    correctAnswer: "Billy Idol",
  },
  {
    question: "What is Indiana Jones first name?",
    answers: [
      {answer: "Henry"}, 
      {answer: "winston"},
      {answer: "Harold"},
      {answer: "Hendrick"}
    ],
    correctAnswer: "Henry",
  },
  {
    question: "What does 'SAS' stand for?",
    answers: [
      {answer: "Sandels and Shoes"}, 
      {answer: "Sea and Sand"},
      {answer: "Special Air Service"},
      {answer: "Samba and Salsa"}
    ],
    correctAnswer: "Special Air Service",
  },
  {
    question: "Where was the 2008 Olympic games held?",
    answers: [
      {answer: "Athens"}, 
      {answer: "Cape Town"},
      {answer: "London"},
      {answer: "Beijing"}
    ],
    correctAnswer: "Beijing",
  },
  {
    question: "Who starred alongside Will Ferrel as his brother 'Dale' in the film 'Step Brothers'?",
    answers: [
      {answer: "Adam Sandler"}, 
      {answer: "Vince Vaughan"},
      {answer: "John C. Reilly"},
      {answer: "Owen Wilson"}
    ],
    correctAnswer: "John C. Reilly",
  },
  {
    question: "'Why Do Birds Suddenly Appear' is a song performed by which band?",
    answers: [
      {answer: "Carpenters"}, 
      {answer: "Brick Layers"},
      {answer: "Plumbers"},
      {answer: "Electricians"}
    ],
    correctAnswer: "Carpenters",
  },
  {
    question: "Airsoft is a sport that originated in which country?",
    answers: [
      {answer: "America"}, 
      {answer: "China"},
      {answer: "Japan"},
      {answer: "United kingdom"}
    ],
    correctAnswer: "Japan",
  },
  {
    question: "The Riddler is a super villain who can be found in which comic book series?",
    answers: [
      {answer: "Spiderman"}, 
      {answer: "The Walking Dead"},
      {answer: "Kick Ass"},
      {answer: "Batman"}
    ],
    correctAnswer: "Batman",
  },
  {
    question: "Where was the comedy series 'Bottom' which starred Rik Mayall and Ade Edmondson set?",
    answers: [
      {answer: "Hammersmith"}, 
      {answer: "Harlow"},
      {answer: "Hounslow"},
      {answer: "Hampsted"}
    ],
    correctAnswer: "Hammersmith",
  },
]

/////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////

const startButton = document.getElementById("start-game");
startButton.addEventListener("click", startGame);

let correctAnswerScore = 0;
let incorrectAnswerScore = 0;

let shuffledQuestions, currentQuestionIndexNumber;

// START GAME //
function startGame(event) {
  console.log("started")
  startButton.classList.add("hide");
  document.getElementById("question").classList.remove("hide");
  shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5);
  currentQuestionIndexNumber = 0;
  document.getElementById("answer-buttons").classList.remove("hide");
  setNextQuestion()
  displayQuestion(question);

};

///////////////////////////////////////////////////////////////////////////////////////

function setNextQuestion() {
  displayNextQuestion(shuffledQuestions[currentQuestionIndexNumber])
}


///////////////////////////////////////////////////////////////////////////////////////

// KEEP TRACK OF QUESTION NUMBER //
function questionTracker(event) {
  currentQuestionIndexNumber +=1;
  let nextQuestBtn = document.getElementById("next-btn");
  if (currentQuestionIndexNumber == 10) {
    nextQuestBtn.innerHTML = "Show Results";
  }
}

/////////////////////////////////////////////////////////////////////////////////////

// DISPLAY QUESTION //
function displayQuestion(question) {
  let theQ = document.getElementById("question"); // display question
  theQ.innerHTML = shuffledQuestions[currentQuestionIndexNumber].question;
 
  let questionNumber = document.getElementById("question-number"); // display question number
  questionNumber.innerHTML = currentQuestionIndexNumber + 1;

  let a = document.getElementsByClassName("btn")[0]; // display answers in button fields
  a.textContent = shuffledQuestions[currentQuestionIndexNumber].answers[0].answer;
  let b = document.getElementsByClassName("btn")[1];
  b.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[1].answer;
  let c = document.getElementsByClassName("btn")[2];
  c.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[2].answer;
  let d = document.getElementsByClassName("btn")[3];
  d.innerHTML = shuffledQuestions[currentQuestionIndexNumber].answers[3].answer;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

// CLICK AND TOGGLE THE ANSWER BUTTONS
function answerSelected(event) {
  selectedValue = null;
  selectedValue = this.innerHTML;
  console.log(selectedValue);
}

// SELECTED ANSWER IS HIGHLIGHTED
function answerHighlighted(event) {
 this.style.backgroundColor = "teal";
}

// RESET ALL THE BACKGROUND BUTTONS COLOR
function resetBackgroundColor(event) {
  let buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = "darkseagreen";
  }
}

// EVENT LISTENERS TO THE SELECTED ANSWERS ON ONCLICKS
let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i].addEventListener("click", resetBackgroundColor); // call the reset first so on every change of selected answer resets before the rest of the code runs
  button = buttons[i].addEventListener("click", answerHighlighted);
  button = buttons[i].addEventListener("click", answerSelected);
};


//////////////////////////////////////////////////////////////////////////////////////////////////////

// CHECK ANSWER
function checkAnswer(event) {
  let buttons = document.getElementsByClassName("btn");
  if (selectedValue === shuffledQuestions[currentQuestionIndexNumber].correctAnswer) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent === selectedValue) {
        buttons[i].style.backgroundColor = "green";
      }
    }
  } else if (selectedValue !== question.correctAnswer) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent === selectedValue) {
        buttons[i].style.backgroundColor = "crimson";
      } else if (buttons[i].textContent === shuffledQuestions[currentQuestionIndexNumber].correctAnswer) {
        buttons[i].style.backgroundColor = "green";
      }
    }
  }
};

////////////////////////////////////////////////////////////////////////////////////////////

// SCORE COUNTER 
function countScore(event) {
  if (selectedValue === shuffledQuestions[currentQuestionIndexNumber].correctAnswer) {
    correctAnswerScore += 1;
  } else {
    incorrectAnswerScore += 1;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////

let submitAnsBtn = document.getElementById("submit-btn");
let nextQuestBtn = document.getElementById("next-btn");

// SUBMIT ANSWER & NEXT QUESTION BUTTON //
function nextQuestionButtonDisplay(event) {
  document.getElementById("next-btn").classList.remove("hide");
  document.getElementById("submit-btn").classList.add("hide");
}

////////////////////////////////////////////////////////////////////////////////////////////

// SUBMIT ANSWER - WITH BOOLEAN LOGIC PREVENTING BUG OF NO SELECT VALUE PASSING TRUE //
function SubmitAnswer(event) {
  if (selectedValue == null) {
    return alert("Please select an answer")
  } else if (selectedValue != null) {
    checkAnswer();
    countScore();
    nextQuestionButtonDisplay();
    selectedValue = null;
    questionTracker();
  }
}

submitAnsBtn.addEventListener("click", SubmitAnswer);

// CHECK WHEN REACHED 10 QUESIIONS THAT WILL END GAME AND WILL RETURN THE SCORE; //
function returnResults(event) {
  let totalScore = correctAnswerScore + incorrectAnswerScore;
  if (totalScore === 10) {
    document.getElementById("question").classList.add("hide");
    document.getElementById("answer-buttons").classList.add("hide");
    document.getElementById("next-btn").classList.add("hide");
    document.getElementById("submit-btn").classList.add("hide"); // up to here to clear and hide elements in the box
    document.getElementById("result-box").classList.remove("hide");
  }

 let userScore = document.getElementById("user-score");
 userScore.innerHTML = correctAnswerScore; // Display user score
 let personalMessage = document.getElementById("personal-message"); // code to display message based on score performance
  if (correctAnswerScore < 3) {
    personalMessage.innerHTML = "Unlucky there, better luck next time!";
  } else if (correctAnswerScore < 6) {
    personalMessage.innerHTML = "Well done, you know some random stuff!";
  } else if (correctAnswerScore < 9) {
    personalMessage.innerHTML = "Wow someone is showing off there skills!";
  } else if (correctAnswerScore == 10) {
    personalMessage.innerHTML = "Wow 100%! We are in the presence of a genius. Congratulations!";
  }
}

////////////////////////////////////////////////////////////////////////////////////

// DISPLAY NEXT QUESTION //
function displayNextQuestion(event) {
  document.getElementById("next-btn").classList.add("hide");
  document.getElementById("submit-btn").classList.remove("hide");
  displayQuestion(question)
}

nextQuestBtn.addEventListener("click", displayNextQuestion);
nextQuestBtn.addEventListener("click", resetBackgroundColor);
nextQuestBtn.addEventListener("click", returnResults);

// RESET VALUES //
function resetGameValues(event) {
  currentQuestionNumberIndex = 1;
  correctAnswerScore = 0;
  incorrectAnswerScore = 0;
  document.getElementById("submit-btn").classList.remove("hide"); // up to here to clear and hide elements in the box
  document.getElementById("result-box").classList.add("hide");
  document.getElementById("next-btn").innerHTML = "Next Question"; // reset the next button display for the rerunning of the game
}

// START NEW GAME //
 let startNewGameBtn = document.getElementById("start-new-game-btn");

startNewGameBtn.addEventListener("click", resetGameValues);
startNewGameBtn.addEventListener("click", startGame);
