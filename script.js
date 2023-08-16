let questions = [
    {
        "question": "Wer war der erste Bundeskanzler ?",
        "answer1": "Konrad Adenauer",
        "answer2": "Angela Merkel",
        "answer3": "Gerhard Schröder",
        "answer4": "Ludwig Erhard",
        "rightAnswer": 1
    },
    {
        "question": "Wer war der erste Bundeskanzler ?",
        "answer1": "Test",
        "answer2": "Test",
        "answer3": "Test",
        "answer4": "Test",
        "rightAnswer": 3
    },
    {
        "question": "Wer war der erste Bundeskanzler ?",
        "answer1": "Test",
        "answer2": "Test",
        "answer3": "Test",
        "answer4": "Test",
        "rightAnswer": 3
    },
    {
        "question": "Wer war der erste Bundeskanzler ?",
        "answer1": "Test",
        "answer2": "Test",
        "answer3": "Test",
        "answer4": "Test",
        "rightAnswer": 3
    },
    {
        "question": "Wer war der erste Bundeskanzler ?",
        "answer1": "Test",
        "answer2": "Test",
        "answer3": "Test",
        "answer4": "Test",
        "rightAnswer": 3
    }
];

let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == question['rightAnswer']) {
        console.log('Richtig')
    } else {
        console.log('Falsch')
    }
}