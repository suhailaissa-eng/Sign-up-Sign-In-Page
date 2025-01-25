const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeatpassword_input = document.getElementById('repeatpassword-input');
const error_message = document.getElementById('error-message');
form.addEventListener('submit', (e) => {


    let errors = [];

    if (firstname_input) {

        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value,repeatpassword-input.value);
    } else {

        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ")
    }

});


function getSignupFormErrors(firstname, email, password, repeatpassword) {
    let errors = [];

    if (firstname === "" || firstname == null) {
        errors.push("First name is required");
        firstname_input.parentElement.classList.add('incorrect')
    }


    if (email === "" || email == null) {
        errors.push("Email is required");
        email_input.parentElement.classList.add('incorrect')
    }



    if (password === "" || password == null) {
        errors.push("Password is required");
        password_input.parentElement.classList.add('incorrect')
    }


    if(password.length <8){
        errors.push("Password must have at least 8 chars");
        password_input.parentElement.classList.add('incorrect')
    }

    if (password !==repeatpassword ) {
        errors.push("Password dose not match repeted password");
        password_input.parentElement.classList.add('incorrect')
        repeatpassword_input.parentElement.classList.add('incorrect')
    }


    return errors;
}
const allInputs = [firstname_input, email_input, password_input, repeatpassword_input]
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText=''
        }
    })
})
