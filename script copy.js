const questions = [
    {
        question: "If Sachin Tendulkar is ranked first with 100 international centuries, who is second?",
        answers: [
            { text: "Ricky Ponting", correct: true },
            { text: "Rohit Sharma", correct: false },
            { text: "Virat Kohli", correct: false },
            { text: "Kumar Sangakkara", correct: false }
        ]
    },
    {
        question: "In a CPU, what does P stand for?",
        answers: [
            { text: "Performance", correct: false },
            { text: "Pixel", correct: false },
            { text: "Platform", correct: false },
            { text: "Processing", correct: true }
        ]
    },
    {
        question: "Which of these topics is primarily dealt with in Siddharth Singh's book 'The Great Smog of India'?",
        answers: [
            { text: "Air pollution", correct: true },
            { text: "Nuclear disaster", correct: false },
            { text: "Terrorism", correct: false },
            { text: "Elections", correct: false }
        ]
    },
    {
        question: "Which river is known as Dehang in parts of Northeast India, especially in Arunachal Pradesh?",
        answers: [
            { text: "Yangtze", correct: false },
            { text: "Yamuna", correct: false },
            { text: "Ganga", correct: false },
            { text: "Brahmaputra", correct: true }
        ]
    },
    {
        question: "In Asia, which of the following plants were widely used by scholars to make manual scripts of their work?",
        answers: [
            { text: "Tulsi", correct: false },
            { text: "Mango", correct: false },
            { text: "Banana", correct: false },
            { text: "Palm", correct: true }
        ]
    },
    {
        question: "Which is called the White Continent?",
        answers: [
            { text: "Antarctica", correct: true },
            { text: "Asia", correct: false },
            { text: "Australia", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "What kind of creature is a seahorse?",
        answers: [
            { text: "Fish", correct: true },
            { text: "Whale", correct: false },
            { text: "Snake", correct: false },
            { text: "Turtle", correct: false }
        ]
    },
    {
        question: "Complete this common description of black and white hair: 'Salt and ___'",
        answers: [
            { text: "Pepper", correct: true },
            { text: "Chilli", correct: false },
            { text: "Mango", correct: false },
            { text: "Sauce", correct: false }
        ]
    },
    {
        question: "The father of which of these was named James?",
        answers: [
            { text: "Harry Potter", correct: true },
            { text: "Draco Malfoy", correct: false },
            { text: "Ron Weasley", correct: false },
            { text: "Luna Lovegood", correct: false }
        ]
    },
    {
        question: "The Battle of Kohima was part of which of these wars?",
        answers: [
            { text: "World War 1", correct: false },
            { text: "World War 2", correct: true },
            { text: "Kargil War", correct: false },
            { text: "Battle of Waterloo", correct: false }
        ]
    },
    {
        question: "Areas of which state were earlier known as Rajputana?",
        answers: [
            { text: "Rajasthan", correct: true },
            { text: "Assam", correct: false },
            { text: "Andhra Pradesh", correct: false },
            { text: "Odisha", correct: false }
        ]
    },
    {
        question: "Which author wrote 'Rusty, The Boy from the Hills'?",
        answers: [
            { text: "Chetan Bhagat", correct: false },
            { text: "Amitav Ghosh", correct: false },
            { text: "Aravind Adiga", correct: false },
            { text: "Ruskin Bond", correct: true }
        ]
    },
    {
        question: "Which of these straits is located near the South China Sea?",
        answers: [
            { text: "Hormuz", correct: false },
            { text: "Taiwan", correct: true },
            { text: "Gibraltar", correct: false },
            { text: "Palk", correct: false }
        ]
    },
    {
        question: "In which of these sports can a penalty corner be awarded?",
        answers: [
            { text: "Basketball", correct: false },
            { text: "Hockey", correct: true },
            { text: "Boxing", correct: false },
            { text: "Kabaddi", correct: false }
        ]
    },
    {
        question: "The completion of the Shimla tunnel will ensure all-weather connectivity to which part of India?",
        answers: [
            { text: "Ladakh", correct: true },
            { text: "Pokhran", correct: false },
            { text: "Kedarnath", correct: false },
            { text: "Devprayag", correct: false }
        ]
    },
    {
        question: "Which of these is a moon and not a dwarf planet?",
        answers: [
            { text: "Europa", correct: true },
            { text: "Pluto", correct: false },
            { text: "Eris", correct: false },
            { text: "Ceres", correct: false }
        ]
    },
    {
        question: "In which event was a medal awarded for performing a 'kata', in the Tokyo 2020 Olympics?",
        answers: [
            { text: "Table Tennis", correct: false },
            { text: "Karate", correct: true },
            { text: "Athletics", correct: false },
            { text: "Pole Vault", correct: false }
        ]
    },
    {
        question: "Which part of the brain is primarily associated with balance, motor equilibrium, and movement?",
        answers: [
            { text: "Cerebellum", correct: true },
            { text: "Occipital Lobe", correct: false },
            { text: "Medulla Oblongata", correct: false },
            { text: "Pons", correct: false }
        ]
    },
    {
        question: "Which of these nation-states was unified in the 19th century under the rule of King Victor Emmanuel II?",
        answers: [
            { text: "England", correct: false },
            { text: "Portugal", correct: false },
            { text: "Italy", correct: true },
            { text: "France", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// function showQuestion(){
//     let question = questions[currentQuestionIndex]
//     let question_no = 1 + currentQuestionIndex  

//     questionElement.innerHTML = question_no + ". " + question 

// }
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let question_no = 1 + currentQuestionIndex
    questionElement.innerHTML = question_no + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        // button.innerHTML = Currentquestion.answer
        // button.classList = "btn"
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        // answerButton.addEventListener("click")
    });
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButton.firstChild) {
        // answerButton.firstChild.removeChild
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === "true"
    if (isCorrect) {
        selectBtn.classList.add("correct")
        score++
    } else {
        selectBtn.classList.add("incorrect")
    }
    // Array(answerButton.correct)forEach(answerButton){
    //     if(selectBtn.dataset.correct === "true"){
    //         selectBtn.classList.add("correct")
    //     }
    // }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState()
    console.log("we are in showScore")
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again!"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        console.log("we are in handleNextButton")
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz()
    }
})

startQuiz();