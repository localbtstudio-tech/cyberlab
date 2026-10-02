const form = document.getElementById("register-form");
const registerButton = document.getElementById("register-button");
const result = document.getElementById("result");


form.addEventListener("submit", async function (event) {

    event.preventDefault();


    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;


    if (username === "" || email === "" || password === "") {

        result.textContent = "⚠️ PLEASE COMPLETE ALL FIELDS.";

        return;
    }


    registerButton.disabled = true;
    registerButton.textContent = "CREATING ACCOUNT...";


    try {

        const response = await fetch("php/register.php", {

            method: "POST",

            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },

            body: new URLSearchParams({
                username: username,
                email: email,
                password: password
            })

        });


        if (!response.ok) {
            throw new Error("Server error");
        }


        const data = await response.json();


        if (data.success) {

            result.textContent = "✅ ACCOUNT CREATED SUCCESSFULLY.";

            form.reset();

        } else {

            result.textContent = `❌ ${data.message}`;

        }


    } catch (error) {

        result.textContent =
            "⚠️ SERVER ERROR. PLEASE TRY AGAIN.";

        console.error(error);

    }


    registerButton.disabled = false;
    registerButton.textContent = "CREATE ACCOUNT";

});