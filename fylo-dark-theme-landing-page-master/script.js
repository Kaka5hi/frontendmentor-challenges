// email input field
const emailInput = document.querySelector('.email-box')

// button next to email inut field
const button = document.querySelector('.button')

// error and success class will be added/removed here
const emailForm = document.querySelector('.email-form')

// targetting the error message and changing it into succes message
const successMessage = document.querySelector('.message')

button.addEventListener('click', () => {
    const emailValue = emailInput.value;
    if(validateEmail(emailValue)) {
        emailForm.classList.remove('error-msg-show')
        document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center; min-height: 100vh; flex-direction: column;"><h1>Thank you!</h1><h2>Reload to go back</h2></div>`;
        // successMessage.textContent = "Thankyou!"
        // emailForm.classList.add('success-msg-show')
    } else {
        emailForm.classList.add('error-msg-show')
    }
})

// regex function for verifying email
function validateEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
