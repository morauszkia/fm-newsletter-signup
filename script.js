const mainContainer = document.getElementById("main");
const formEl = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailErrorEl = document.getElementById("email-error");

const successDialog = document.getElementById("success");
const enteredEmailSpan = document.getElementById("subscriber-email");
const dismissBtnEl = document.getElementById("dismiss-btn");

const showEmailError = (message) => {
    emailInput.classList.add("error");
    emailErrorEl.innerText = message;
    emailErrorEl.style.display = "block";
};

const hideEmailError = () => {
    emailInput.classList.remove("error");
    emailErrorEl.innerText = "";
    emailErrorEl.style.display = "none";
};

const validateEmail = function () {
    const enteredEmail = emailInput.value;

    const emailRegexp = new RegExp(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );

    if (!emailRegexp.test(enteredEmail)) {
        return { status: "error", message: "Valid email required!" };
    } else {
        return { status: "ok", message: "" };
    }
};

const repeatedEmailValidation = function () {
    const { status, message } = validateEmail();

    if (status === "ok") {
        hideEmailError();
        emailInput.removeEventListener("input", repeatedEmailValidation);
    } else {
        showEmailError(message);
    }
};

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const { status, message } = validateEmail();

    if (status === "error") {
        showEmailError(message);
        emailInput.addEventListener("input", repeatedEmailValidation);
    } else {
        hideEmailError();
        emailInput.removeEventListener("input", repeatedEmailValidation);
        enteredEmailSpan.textContent = emailInput.value;
        emailInput.value = "";
        mainContainer.classList.add("hidden");
        successDialog.classList.add("open");
    }
});

dismissBtnEl.addEventListener("click", () => {
    mainContainer.classList.remove("hidden");
    successDialog.classList.remove("open");
});
