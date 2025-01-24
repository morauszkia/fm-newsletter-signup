const mainContainer = document.getElementById("main");
const formEl = document.getElementById("form");
const emailInput = document.getElementById("email");

const successDialog = document.getElementById("success");
const enteredEmailSpan = document.getElementById("subscriber-email");
const dismissBtnEl = document.getElementById("dismiss-btn");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.value;

    enteredEmailSpan.textContent = enteredEmail;

    emailInput.value = "";
    mainContainer.classList.add("hidden");
    successDialog.classList.add("open");
});

dismissBtnEl.addEventListener("click", () => {
    mainContainer.classList.remove("hidden");
    successDialog.classList.remove("open");
});
