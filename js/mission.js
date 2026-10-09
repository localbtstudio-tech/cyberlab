
/* ================================= */
/* PROTECT MISSION                   */
/* ================================= */

async function protectMission() {

    try {

        const response = await fetch("php/auth.php");

        if (!response.ok) {
            throw new Error("Authentication server error.");
        }

        const data = await response.json();

        if (!data.success) {

            window.location.replace("login.html");

            return false;
        }

        return true;

    } catch (error) {

        console.error("Authentication error:", error);

        const result = document.getElementById("result");

        if (result) {
            result.textContent =
                "Unable to verify login. Please try again.";
        }

        return false;
    }
}


/* ================================= */
/* INITIALIZE MISSION                */
/* ================================= */

async function initializeMission() {

    // Verify authentication before enabling mission logic.

    const isAuthenticated = await protectMission();

    if (!isAuthenticated) {
        return;
    }


    /* ================================= */
    /* GET HTML ELEMENTS                 */
    /* ================================= */

    const answerInput =
        document.getElementById("answer-input");

    const submitButton =
        document.getElementById("submit-button");

    const result =
        document.getElementById("result");

    const scoreDisplay =
        document.getElementById("score");

    const hintButton =
        document.getElementById("hint-button");

    const hint =
        document.getElementById("hint");


    /* ================================= */
    /* VALIDATE HTML ELEMENTS            */
    /* ================================= */

    if (
        !answerInput ||
        !submitButton ||
        !result ||
        !scoreDisplay ||
        !hintButton ||
        !hint
    ) {

        console.error("Mission HTML elements are missing.");

        return;
    }


    /* ================================= */
    /* GET MISSION ID                    */
    /* ================================= */

    const missionId =
        Number(document.body.dataset.missionId);

    if (
        !Number.isInteger(missionId) ||
        missionId <= 0
    ) {

        result.textContent =
            "Mission configuration error. Invalid mission ID.";

        submitButton.disabled = true;
        hintButton.disabled = true;

        console.error("Invalid mission ID:", missionId);

        return;
    }


    /* ================================= */
    /* MISSION VARIABLES                 */
    /* ================================= */

    let completed = false;
    let hintIndex = 0;

    const hints = [
        "Look at the login time.",
        "Check whether the IP is internal or external."
    ];


    /* ================================= */
    /* SHOW HINTS                        */
    /* ================================= */

    hintButton.addEventListener("click", function () {

        if (completed) {
            return;
        }

        if (hintIndex < hints.length) {

            hint.textContent = hints[hintIndex];

            hintIndex++;
        }

        if (hintIndex >= hints.length) {

            hintButton.disabled = true;

            hintButton.textContent = "NO MORE HINTS";
        }

    });


  
    submitButton.addEventListener(
        "click",
        async function () {

            if (completed) {
                return;
            }

            const userAnswer =
                answerInput.value.trim();

            if (userAnswer === "") {

                result.textContent =
                    "⚠️ PLEASE ENTER AN ANSWER.";

                return;
            }

            submitButton.disabled = true;

            submitButton.textContent = "CHECKING...";


            try {

                /* Send answer and mission ID to PHP */

                
                const response = await fetch(
                    "php/submit.php",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },

                        body: new URLSearchParams({
                            answer: userAnswer,
                            mission_id: String(missionId)
                        })
                    }
                );



                /* Convert JSON response into an object */

                const data = await response.json();


                /* Check authentication again */

                if (response.status === 401) {

                    window.location.replace("login.html");

                    return;
                }


                /* Handle other server errors */

                if (!response.ok) {

                    result.textContent =
                        `⚠️ ${data.message || "Request failed."}`;

                    return;
                }


                /* Check the answer */

                if (data.correct) {

                    const serverScore = Number(data.score);

                    if (!Number.isFinite(serverScore)) {
                        throw new Error("Invalid score received.");
                    }

                    completed = true;


                    result.textContent =
                        "✅ CORRECT! MISSION COMPLETED.";


                    // Display the score returned by PHP.

                    scoreDisplay.textContent =
                        `Score: ${serverScore} XP`;


                    submitButton.textContent =
                        "MISSION COMPLETED";


                    answerInput.disabled = true;

                    hintButton.disabled = true;


                } else {

                    result.textContent =
                        data.message === "WRONG"
                            ? "❌ WRONG ANSWER. TRY AGAIN."
                            : `⚠️ ${data.message || "Incorrect answer."}`;

                }

            } catch (error) {

                console.error("Submission error:", error);

                result.textContent =
                    "⚠️ SERVER ERROR. PLEASE TRY AGAIN.";

            } finally {

                if (!completed) {

                    submitButton.disabled = false;

                    submitButton.textContent =
                        "SUBMIT ANSWER";
                }
            }

        }
    );

}



initializeMission();
