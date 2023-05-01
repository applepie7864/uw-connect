function validate(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    
    if (values.name == "") {
        error.name = "Empty field.";
    } else {
        error.name = "";
    }
    
    if (values.email == "") {
        error.email = "Empty field.";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email.";
    } else {
        error.email = "";
    }

    if (values.password == "") {
        error.password = "Empty field.";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Invalid password.";
    } else {
        error.password = "";
    }
    
    if (values.passwordConfirmation == "") {
        error.passwordConfirmation = "Empty field.";
    } else if (values.passwordConfirmation[0] === values.password[0]) {
        error.passwordConfirmation = "";
    } else {
        error.passwordConfirmation = "Passwords don't match.";
    }

    return error;
}

export default validate;