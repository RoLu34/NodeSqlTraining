// REGEX PATTERNS FOR VALIDATIONS

// Between 3 and 16 characters, may contain letters, numbers, "_" and "."
// no spaces or special characters
const usernameRegex = /^[a-zA-Z0-9._]{3,16}$/;

// rfc 5322 compliant email regex
const emailRegex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

// At least 8 characters, one uppercase, one lowercase, one number, one special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

export function isUsernameValid(username) {
    if(typeof username !== "string") return false;

    return usernameRegex.test(username);
}

export function isEmailValid(email) {
    if(typeof email !== "string") return false;
    
    return emailRegex.test(email);
}

export function isPasswordValid(password){
    console.log(password);
    
    return passwordRegex.test(password);
}

