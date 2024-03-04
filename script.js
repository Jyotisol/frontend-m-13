const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');

const errorSmall = document.querySelectorAll('.small');
const formEl = document.querySelector('.form');
const icon_error = document.querySelectorAll('.icon-error');
const input = document.querySelector('.input');
const claim_btn = document.querySelector('.claim-btn');

fname.addEventListener("input", () => hideError(0));
lname.addEventListener("input", () => hideError(1));
emailEl.addEventListener("input", () => hideError(2));
passwordEl.addEventListener("input", () => hideError(3));


// Function to show error message
const showError = (index, message) => {
    errorSmall[index].innerText = message;
    icon_error[index].style.display = "block";
    if (index === 0) {
        fname.classList.add("error-border");
    } else if (index === 1) {
        lname.classList.add("error-border");
    } else if (index === 2) {
        emailEl.classList.add("error-border");
    } else if (index === 3) {
        passwordEl.classList.add("error-border");
    }
};

// Function to hide error message
const hideError = (index) => {
    errorSmall[index].innerText = "";
    icon_error[index].style.display = "none";
    if (index === 0) {
        fname.classList.remove("error-border");
    } else if (index === 1) {
        lname.classList.remove("error-border");
    } else if (index === 2) {
        emailEl.classList.remove("error-border");
    } else if (index === 3) {
        passwordEl.classList.remove("error-border");
    }
};

const isRequired = (value) => value === "" ? false : true;

const checkFirstName = () => {
    const firstName = fname.value.trim();
    if (!isRequired(firstName)) {
        errorSmall[0].innerText = "First name cannot be empty";
        icon_error[0].style.display = "block";
        fname.classList.add('error-border');
      
       return false;
    } else {
        icon_error[0].style.display = "none";
        fname.classList.remove('error-border');
        return true;
    }
};

const checkLastName = () => {
    let valid =false;
    const lastName = lname.value.trim();
    if (!isRequired(lastName)) {
        errorSmall[1].innerText = "Last name cannot be empty";
        icon_error[1].style.display = "block";
        lname.classList.add('error-border');
        return false;
    } else {
        icon_error[1].style.display = "none";
        lname.classList.remove('error-border');
         return true;
        
    }
};

const checkEmail = () => {
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        errorSmall[2].innerText = "Email cannot be empty";
        icon_error[2].style.display = "block";
        emailEl.classList.add('error-border');
        return false;
    } else {
        const emailPattern = /^[^\s@]+\@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Invalid email format");
            return false;
        } else {
            icon_error[2].style.display = "none";
            emailEl.classList.remove('error-border');
            return true;
        }
    }
};

const checkPassword = () => {
   
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
        errorSmall[3].innerText = "Password cannot be empty";
        icon_error[3].style.display = "block";
        passwordEl.classList.add('error-border');
        return false;
    } else {
        icon_error[3].style.display = "none";
        passwordEl.classList.remove('error-border');
       return true;
    }
   
};


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const isFirstNameValid = checkFirstName();
    const isLastNameValid = checkLastName();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
  
    const isFormValid =
      isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;
  
    if (isFormValid) {
      alert("Form is valid");
      formEl.reset();
    } else {
      // If form is invalid, do not submit
      return false;
    }
  });
  