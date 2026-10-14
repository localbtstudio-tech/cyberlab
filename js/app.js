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
        loginLink.style.display = loggedIn ? "none" : "inline";
    }

    if (registerLink) {
        registerLink.style.display = loggedIn ? "none" : "inline";
    }

    if (userInfo) {
        userInfo.textContent = loggedIn
            ? `Welcome, ${data.username}`
            : "";

        userInfo.style.display = loggedIn ? "inline" : "none";
    }

    if (logoutLink) {
        logoutLink.style.display = loggedIn ? "inline" : "none";
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


