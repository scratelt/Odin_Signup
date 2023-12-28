// JS
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const form = document.querySelector("form");


function checkPassword(event) {
    const isError = passwordInput.value.length < 8 && passwordInput.value.trim().length > 0;

    if (isError) {
        document.getElementById("password").classList.add("error");
        return false;
    } else {
        document.getElementById("password").classList.remove("error");
        return true;
    }
};


function handleSubmit(event) {
    if (!checkPassword()) {
    event.preventDefault();
    alert("Password must be at least 8 characters long");
    } else {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        event.preventDefault();

    }
}}

passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkPassword);
form.addEventListener("submit", handleSubmit);