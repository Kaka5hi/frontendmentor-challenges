// grab email value to check if its validate or not
const eMailValue = document.getElementById('email-value');
//form
const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInput(eMailValue);
})

function checkInput(eMailValue) {
    const email = eMailValue.value;
    if (!validateEmail(email)) {
        form.classList.add('error-message-show')
        console.log("invalid")
    } else {
        form.classList.remove('error-message-show')
        console.log("Valid")
    }
}

//validating email id
function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}