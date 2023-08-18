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
        "question": "Wann viel die Berliner Mauer ?",
        "answer1": "1984",
        "answer2": "1989",
        "answer3": "1999",
        "answer4": "1979",
        "rightAnswer": 2
    },
    {
        "question": "Was ist der längste Fluss der Welt ?",
        "answer1": "Donau",
        "answer2": "Rhein",
        "answer3": "Isar",
        "answer4": "Nil",
        "rightAnswer": 4
    },
    {
        "question": "Wie viele Oscars gewann der Film Titanic ?",
        "answer1": "8",
        "answer2": "11",
        "answer3": "6",
        "answer4": "14",
        "rightAnswer": 2
    },
    {
        "question": "Wie lautet das chemische Symbol für Stickstoff ?",
        "answer1": "H",
        "answer2": "O",
        "answer3": "N",
        "answer4": "Au",
        "rightAnswer": 3
    },
    {
        "question": "Wie viele Kontinente gibt es ?",
        "answer1": "6",
        "answer2": "8",
        "answer3": "5",
        "answer4": "7",
        "rightAnswer": 4
    },
    {
        "question": "Wer hat das Gemälde von Mona Lisa gemalt ?",
        "answer1": "Leonardo da Vinci",
        "answer2": "Mozart",
        "answer3": "Fuad Hussen",
        "answer4": "Barack Obama",
        "rightAnswer": 1
    },
    {
        "question": "Was ist das flächenmäßig kleinste Bundesland ?",
        "answer1": "NRW",
        "answer2": "Rheinland Pfalz",
        "answer3": "Hessen",
        "answer4": "Bremen",
        "rightAnswer": 4
    },
    {
        "question": "Wie viele Chromosomen hat ein Mensch ?",
        "answer1": "52",
        "answer2": "42",
        "answer3": "46",
        "answer4": "33",
        "rightAnswer": 3
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none'
        document.getElementById('imgTop').style = 'display: none'
        score();
    } else {

        let question = questions[currentQuestion];

        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question['rightAnswer']}`;

    if (selectedQuestionNumber == question['rightAnswer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        correctAnswers++
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextQuestion').disabled = false;
}


function nextQuestion() {
    currentQuestion++; // von 0 auf 1 des JSON Array
    document.getElementById('nextQuestion').disabled = true;
    resetAnswerButton();
    showQuestion();
}


function resetAnswerButton() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}


function score(){
    document.getElementById('reachedPoints').innerHTML = correctAnswers;
}