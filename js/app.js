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