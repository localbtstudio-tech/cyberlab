const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

const hintButton = document.getElementById("hint-button");
const hint = document.getElementById("hint");


const correctAnswer = "45.23.XX.XX";
const missionScore = 100;
const hintPenalty = 25;

let score = 0;
let completed = false;

let hintIndex = 0;
let hintsUsed = 0;

const hints = [
    "Look at the login time.",
    "Check whether the IP is internal or external."
];


hintButton.addEventListener("click", function () {

   
    if (completed) {
        return;
    }

    
    if (hintIndex < hints.length) {

        hint.textContent = hints[hintIndex];

        hintIndex++;

        hintsUsed++;

    }

  
    if (hintIndex === hints.length) {

        hintButton.disabled = true;
        hintButton.textContent = "NO MORE HINTS";

    }

});


submitButton.addEventListener("click", function () {

    if (completed) {
        return;
    }

    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === "") {

        result.textContent = "⚠️ PLEASE ENTER AN ANSWER.";
        return;
    }

    if (userAnswer === correctAnswer.toLowerCase()) {

        score = Math.max(
            0,
            missionScore - (hintsUsed * hintPenalty)
        );

        completed = true;
        
        result.textContent = "✅ CORRECT! MISSION COMPLETED.";

        scoreDisplay.textContent = `Score: ${score} XP`;


        submitButton.disabled = true;
        submitButton.textContent = "MISSION COMPLETED";

        answerInput.disabled = true;
        hintButton.disabled = true;


    } else {

        result.textContent = "❌ WRONG ANSWER. TRY AGAIN.";

    }

});
