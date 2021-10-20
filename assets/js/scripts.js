

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
    answers: {
      a: "Paris",
      b: "Amsterdam",
      c: "Budapest",
      d: "Berlin",
    },
    correctAnswer: "d",
  },
  {
    question: "What town do the Simspons live in?",
    answers: {
      a: "Springfield",
      b: "Quahog",
      c: "New York",
      d: "Atlantas",
    },
    correctAnswer: "a",
  },
  {
    question: "What is Superman's weakness?",
    answers: {
      a: "Sausages",
      b: "Kryptonite",
      c: "Working at the Daily Planet",
      d: "Samsonite",
    },
    correctAnswer: "b",
  },
  {
    question: "What does LED stand for?",
    answers: {
      a: "Light Emitting Diode",
      b: "Light Emitting Danger",
      c: "Light Energy Detected",
      d: "Light Emitting Disc",
    },
    correctAnswer: "a",
  },
  {
    question: "Who helped co-write the lyrics to the hit song from Dire Straits 'Money for Nothing'?",
    answers: {
      a: "Neil Diamond",
      b: "Bernie Taupe",
      c: "Sting",
      d: "Elton John",
    },
    correctAnswer: "c",
  },
  {
    question: "From which country would you find the following items from? Kielbasa, Pierogi, Barszcz, Wodka",
    answers: {
      a: "Tialand",
      b: "Russia",
      c: "Hungary",
      d: "Poland",
    },
    correctAnswer: "d",
  },
  {
    question: "How many neighbours does Russia Share their borders with? ",
    answers: {
      a: "12",
      b: "14",
      c: "16",
      d: "18",
    },
    correctAnswer: "b",
  },
  {
    question: "How old was Wolfgang Amadeus Mozart when he died?",
    answers: {
      a: "35",
      b: "45",
      c: "65",
      d: "75",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the smallest Country in the World?",
    answers: {
      a: "San Marino",
      b: "Monaco",
      c: "Atlanta City",
      d: "Vatican City",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the speed of light?",
    answers: {
      a: "200102 miles per second",
      b: "186000 miles per second",
      c: "148000 miles per second",
      d: "198000 miles per second",
    },
    correctAnswer: "b",
  },
  {
    question: "What would you use a deburrer for?",
    answers: {
      a: "To smooths edges and sides of manufactured parts",
      b: "To open canned products",
      c: "To test humidity in the air",
      d: "To dig a hole in the ground",
    },
    correctAnswer: "a",
  },
  {
    question: "Which snake is not a poisonous?",
    answers: {
      a: "Black Mamba",
      b: "Inland Taipan",
      c: "Boa Constrictor",
      d: "Cobra",
    },
    correctAnswer: "d",
  },
  {
    question: "Which snake is poisonous?",
    answers: {
      a: "Indian Krait",
      b: "Burmese Python",
      c: "Green Anaconda",
      d: "Coin Snake",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the tallest mountain on Earth?",
    answers: {
      a: "Mount Everest",
      b: "Mount Rushmore",
      c: "K2",
      d: "Cho Oyu",
    },
    correctAnswer: "a",
  },
  {
    question: "What did Lamborghini make before it made Super Cars?",
    answers: {
      a: "Windows",
      b: "Tractors",
      c: "Furniture",
      d: "Motorbikes",
    },
    correctAnswer: "b",
  },
  {
    question: "How many litres are in a gallon?",
    answers: {
      a: "3.90",
      b: "5.12",
      c: "4.55",
      d: "4.23",
    },
    correctAnswer: "c",
  },
  {
    question: "Which English Football Team went a whole season unbeaten in the Premier League",
    answers: {
      a: "Arsenal",
      b: "Manchester United",
      c: "Manchester City",
      d: "Chelsea",
    },
    correctAnswer: "a",
  },
  {
    question: "How many Grand Slams has Roger Federer won up till 2021?",
    answers: {
      a: "22",
      b: "21",
      c: "20",
      d: "23",
    },
    correctAnswer: "c",
  },
  {
    question: "How many legs does a ladybug have?",
    answers: {
      a: "4",
      b: "8",
      c: "10",
      d: "6",
    },
    correctAnswer: "d",
  },
  {
    question: "Where can you find a timpani",
    answers: {
      a: "Inside a car engine",
      b: "In an orchestra",
      c: "mixed in a bolognese sauce",
      d: "Inside a jewellers tool box",
    },
    correctAnswer: "b",
  },
  {
    question: "How many lives does a cat have?",
    answers: {
      a: "One",
      b: "None",
      c: "Nine",
      d: "Twentyfour",
    },
    correctAnswer: "a",
  },
  {
    question: "Who Played James Bond in 'You Only Live Twice",
    answers: {
      a: "Roger Moore",
      b: "Sean Connery",
      c: "Piers Brosnan",
      d: "Daniel Craig",
    },
    correctAnswer: "b",
  },
  {
    question: "What film is the character 'Doctor Evil' well known from?",
    answers: {
      a: "The Fantastic Four",
      b: "Dr No",
      c: "Austin Powers",
      d: "Dispicable Me",
    },
    correctAnswer: "c",
  },
  {
    question: "When did the UK fully ban the use of Asbestos",
    answers: {
      a: "1970",
      b: "1980",
      c: "1990",
      d: "2000",
    },
    correctAnswer: "d",
  },
  {
    question: "Who created the character 'Winnie the Pooh'?",
    answers: {
      a: "A.A. Milne",
      b: "Walt Disney",
      c: "Michael Bond",
      d: "Mary Tourtel",
    },
    correctAnswer: "a",
  },
  {
    question: "How many times has the TV show 'Family Guy' been cancelled?",
    answers: {
      a: "0",
      b: "2",
      c: "1",
      d: "3",
    },
    correctAnswer: "b",
  },
  {
    question: "Who was supposed to play the T-1000 in 'Terminator 2; Judgement Day' before Robert Patrick took up the role.",
    answers: {
      a: "Bill Murray",
      b: "Carl Weathers",
      c: "Billy Idol",
      d: "Jean Claude Van Damme",
    },
    correctAnswer: "c",
  },
]



const startButton = document.getElementById("start-game");
startButton.addEventListener("click", startGame)



// START GAME //
function startGame() {
  console.log("started")
  startButton.classList.add("hide");
  document.getElementById("question").classList.remove("hide");
  document.getElementById("answer-buttons").classList.remove("hide");

  let randomQuestions = [];
  let i = 0;
  while ( i < 10 ) {
    let randomQuestionNumber = Math.floor(Math.random() * quizQuestions.length); // Random Question number drawn from the arrays length
    let randomQuestion = quizQuestions.splice(randomQuestionNumber, 1);  //Random Question drawn from the list of Questions and added into new array
    let striptedQuestion = randomQuestion[0]; // returns a stripped question outside of an array
    randomQuestions.push(striptedQuestion); // push the stripped uestion into the list of 10 questions for the game;
    i++;
  };
}




// DISPLAY QUESTION //
function displayQuestion() {

}



// DISPLAY ANSWERS //
function displayAnswers() {

}



// CHECK ANSWERS t& TO NEXT QUESTION//
function submitAnswer() {

}


// KEEP TRACK OF QUESTION NUMBER //
function questionTracker() {

}