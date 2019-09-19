function password_is_valid(password) {

    if (password == "") throw new Error ("Password should not be empty");
    if (password.length <= 9) throw new Error("Password should be longer than 8 characters");
    if (!/[A-Z]/.test(password)) throw new Error ("Password should have at least one uppercase letter");
    if (!/[a-z]/.test(password)) throw new Error ("Password should have at least one lowercase letter");
    if (!/[0-9]/.test(password)) throw new Error ("Password should have at least one number");
  return password;
}

/* function password_is_ok(password) {
    if ( password == "" | password.length < 9) throw "Password should not be empty and should be longer than 8 characters";
    if (!(/[A-Z]/).test(password) & !(/[a-z]/).test(password) & !(/[0-9]/).test(password)) throw "Password should have at least one uppercase letter or should have at least one lowercase letter or should have at least one number";
  return password;
} */

function password_is_ok(password) {
  if (password == "" | password.length < 9) {
    return false;
  }
  else if (!(/[A-Z]/).test(password) & !(/[a-z]/).test(password) & !(/[0-9]/).test(password)) {
    return false;
  }
  else {
    return true;
  }
}

console.log(password_is_ok(""));