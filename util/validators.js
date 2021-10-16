module.exports.validateRegisterInput = (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if (firstName.trim() === '') {
        errors.name = 'First name required';
    }
    if (lastName.trim() === '') {
        errors.name = 'Last name required';
    }
    if (email.trim() === '') {
        errors.email = 'Email required';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'Invalid email address';
        }
    }
    if (password === '') {
        errors.password = 'Password required';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
};

module.exports.validateLoginInput = (email, password) => {
    const errors = {};
    if (email.trim() === '') {
        errors.name = 'Please enter your email';
    }
    if (password.trim() === '') {
        errors.password = 'Please enter your password';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
};