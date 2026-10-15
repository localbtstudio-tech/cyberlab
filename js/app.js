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
    const registerLink = document.getElementById("registerLink");
    const userInfo = document.getElementById("userInfo");
    const logoutLink = document.getElementById("logoutLink");

    const loggedIn = data.success === true;

    if (loginLink) {
        loginLink.hidden = loggedIn;
    }

    if (registerLink) {
        registerLink.hidden = loggedIn;
    }

    if (userInfo) {
        userInfo.textContent = loggedIn
            ? `Welcome, ${data.username}`
            : "";

        userInfo.hidden = !loggedIn;
    }

    if (logoutLink) {
        logoutLink.hidden = !loggedIn;
    }
}


checkAuth();


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

const logoutLink = document.getElementById("logoutLink");

logoutLink.addEventListener("click", async function(event) {

    event.preventDefault();

    await logout();

});


