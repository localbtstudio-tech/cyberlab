const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

const hintButton = document.getElementById("hint-button");
const hint = document.getElementById("hint");

const correctAnswer = "45.23.XX.XX";
const missionScore = 100;

let score = 0;
let completed = false;


submitButton.addEventListener("click", function () {

    const userAnswer = answerInput.value.trim();

    if (completed) {
        return;
    }

    if (userAnswer === correctAnswer) {

        score += missionScore;
        completed = true;

        result.textContent = "✅ CORRECT! MISSION COMPLETED.";

        scoreDisplay.textContent = `Score: ${score} XP`;

        submitButton.disabled = true;
        submitButton.textContent = "MISSION COMPLETED";

    } else {

        result.textContent = "❌ WRONG ANSWER. TRY AGAIN.";

    }

});

const hints = [
    "Look at the login time.",
    "Check whether the IP is internal or external."
];

let hintIndex = 0;

hintButton.addEventListener("click", function () {

    if (hintIndex < hints.length) {

        hint.textContent = hints[hintIndex];

        hintIndex++;

    }

});