const questions = [
    {
        question: "Now that we got that out of the way, let’s proceed to finding you your personalized cafe drink recommendation! Let’s say you’re on your way commuting to work. But all of a sudden, an abandoned cat blocks your path. What would you end up doing?",
        answers: [
            { text: "I’ll stop to pet the cat of course! Hopefully my boss won’t be mad about being a few minutes late.", sweet: true},
            { text: "The cat looks adorable but I’m nervous stopping will make me late to work. I’ll continue my commute to work as normal.", creamy: true},
            { text: "The cat could have fleas, I’ll continue my commute on the opposite side to avoid any contact.", bitter: true},
            { text: "Duh, stop to pet the cat. If my boss asks, I’ll just show them a pic of the cat.", savory: true},
        ]
    },
    {
        question: " You made it to work just in time! As you unpack you belongings and seat yourself at your desk, you find a pile of work along with a note in your boss’ handwriting “Due Today”. What would you end up doing?",
        answers: [
            { text: "I leave my desk to take a quick stretch break. If I run into any coworkers, I’ll spend a few minutes having small talk as well because I’m confident I can finish this task by the end of the day!", sweet: true},
            { text: "I leave my desk to make my usual emotional support drink. I feel a bit anxious about this unprompted task but I have a responsibility to complete it.", creamy: true},
            { text: "I’m a little annoyed my boss didn’t tell me about this beforehand. I will ask my cowor", bitter: true},
            { text: "I will talk to my boss to confirm that I need to complete this task today. Regardless, I am sure I can finish this task if I move some parts of my schedule around.", savory: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let sweetScore = 0;
let creamyScore = 0;
let bitterScore = 0;
let savoryScore = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    sweetScore = 0;
    creamyScore = 0;
    bitterScore = 0;
    savoryScore = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        //display answer in the button
        answerButton.appendChild(button);
    });
}

startQuiz();
//showQuestion();
