function checkPassword() {

    const correctPassword = "justin12345";
    const userInput = document.getElementById("password").value;

    if (userInput === correctPassword) {

        window.location.href = "secret.html";

    } else {

        window.location.href = "Erreur.html";

    }
}