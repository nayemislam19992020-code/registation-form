const regForm = document.getElementById("regForm");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const genderError = document.getElementById("genderError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError =
    document.getElementById("confirmPasswordError");

const termsError = document.getElementById("termsError");

const successMessage =
    document.getElementById("successMessage");


regForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const formData = new FormData(regForm);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const gender = formData.get("gender");
    const phone = formData.get("phone").trim();
    const password = formData.get("password");
    const confirmPassword =
        formData.get("confirmPassword");

    const terms =
        document.getElementById("terms").checked;


    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    genderError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    nameError.classList.add("hidden");
    emailError.classList.add("hidden");
    genderError.classList.add("hidden");
    phoneError.classList.add("hidden");
    passwordError.classList.add("hidden");
    confirmPasswordError.classList.add("hidden");

    termsError.classList.add("hidden");

    successMessage.classList.add("hidden");


    let isValid = true;


    // Name validation
    if (!name) {

        nameError.textContent = "Name is required";
        nameError.classList.remove("hidden");

        isValid = false;
    }


    // Email validation
    if (!email) {

        emailError.textContent = "Email is required";
        emailError.classList.remove("hidden");

        isValid = false;

    } else if (!email.includes("@")) {

        emailError.textContent =
            "Please enter a valid email";

        emailError.classList.remove("hidden");

        isValid = false;
    }


    // Gender validation
    if (!gender) {

        genderError.textContent =
            "Please select your gender";

        genderError.classList.remove("hidden");

        isValid = false;
    }


    // Phone validation
    if (!phone) {

        phoneError.textContent =
            "Phone number is required";

        phoneError.classList.remove("hidden");

        isValid = false;
    }


    // Password validation
    if (!password) {

        passwordError.textContent =
            "Password is required";

        passwordError.classList.remove("hidden");

        isValid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters";

        passwordError.classList.remove("hidden");

        isValid = false;
    }


    // Confirm password
    if (!confirmPassword) {

        confirmPasswordError.textContent =
            "Please confirm your password";

        confirmPasswordError.classList.remove("hidden");

        isValid = false;

    } else if (password !== confirmPassword) {

        confirmPasswordError.textContent =
            "Passwords do not match";

        confirmPasswordError.classList.remove("hidden");

        isValid = false;
    }


    // Terms validation
    if (!terms) {

        termsError.classList.remove("hidden");

        isValid = false;
    }


    // Success
    if (isValid) {

        successMessage.classList.remove("hidden");

        alert("Registration successful! Welcome, " + name);

        regForm.reset();
    }

});