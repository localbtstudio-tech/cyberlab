const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const result = document.getElementById("result");


loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;


    if (email === "" || password === "") {

        result.textContent = "⚠️ PLEASE COMPLETE ALL FIELDS.";

        return;
    }


    loginButton.disabled = true;
    loginButton.textContent = "LOGGING IN...";


    try {

        const response = await fetch("php/login.php", {

            method: "POST",

            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },

            body: new URLSearchParams({
                email: email,
                password: password
            })

        });


        if (!response.ok) {
            throw new Error("Server error");
        }


        const data = await response.json();


        if (data.success) {

            result.textContent = "✅ LOGIN SUCCESSFUL.";

            window.location.href = "index.html";

        } else {

            result.textContent = `❌ ${data.message}`;

            loginButton.disabled = false;
            loginButton.textContent = "LOGIN";

        }


    } catch (error) {

        result.textContent =
            "⚠️ SERVER ERROR. PLEASE TRY AGAIN.";

        console.error(error);

        loginButton.disabled = false;
        loginButton.textContent = "LOGIN";

    }

});