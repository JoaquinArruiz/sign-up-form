let password = document.getElementById('password')
let confirmPass = document.getElementById('passwordConfirm')

let validatePassword = () => {
    
    if (a != b) {
        confirmPass.setCustomValidity("Passwords don't match");
    }

    else {
        confirmPass.setCustomValidity('')
    }
}

password.onchange = validatePassword;
confirmPass.onkeyup= validatePassword;