const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

const hintButton = document.getElementById("hint-button");
const hint = document.getElementById("hint");


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


submitButton.addEventListener("click", async function () {

    if (completed) {
        return;
    }


    const userAnswer = answerInput.value.trim();


    if (userAnswer === "") {

        result.textContent = "⚠️ PLEASE ENTER AN ANSWER.";

        return;

    }

    submitButton.disabled = true;
    submitButton.textContent = "CHECKING...";


    try {

        /* Send answer to PHP */

        const response = await fetch("php/submit.php", {

            method: "POST",

            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },

            body: new URLSearchParams({
                answer: userAnswer
            })

        });


        /* Check HTTP response */

        if (!response.ok) {
            throw new Error("Server error");
        }


        /* Convert JSON response into JavaScript object */

        const data = await response.json();


        /* Check PHP result */

        if (data.correct) {

            score = Math.max(
                0,
                missionScore - (hintsUsed * hintPenalty)
            );

            completed = true;


            result.textContent =
                "✅ CORRECT! MISSION COMPLETED.";


            scoreDisplay.textContent =
                `Score: ${score} XP`;


            submitButton.textContent =
                "MISSION COMPLETED";


            answerInput.disabled = true;
            hintButton.disabled = true;


        } else {

            result.textContent =
                "❌ WRONG ANSWER. TRY AGAIN.";


            submitButton.disabled = false;
            submitButton.textContent =
                "SUBMIT ANSWER";

        }

    } catch (error) {

        result.textContent =
            "⚠️ SERVER ERROR. PLEASE TRY AGAIN.";

        submitButton.disabled = false;
        submitButton.textContent =
            "SUBMIT ANSWER";

        console.error(error);

    }

});


async function checkAuth() {

    try {

        const response = await fetch("php/auth.php");


        if (!response.ok) {

            throw new Error("Server error");

        }


        const data = await response.json();

        updateNavbar(data);


    } catch (error) {

        console.error(error);

    }

}


function updateNavbar(data) {

    const loginLink = document.getElementById("loginLink");
    const userInfo = document.getElementById("userInfo");
    const logoutLink = document.getElementById("logoutLink");


    if (data.success) {

        loginLink.style.display = "none";

        userInfo.textContent =
            `Welcome, ${data.username}`;

        logoutLink.style.display = "inline";


    } else {

        loginLink.style.display = "inline";

        userInfo.textContent = "";

        logoutLink.style.display = "none";

    }

}
checkAuth();

const logoutLink = document.getElementById("logoutLink");

logoutLink.addEventListener("click", function(event) {

    event.preventDefault();

    logout();

});

async function logout() {

    try {

        const response = await fetch("php/logout.php");

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        if (data.success) {
            checkAuth();
        }

    } catch (error) {

        console.error(error);

    }
}