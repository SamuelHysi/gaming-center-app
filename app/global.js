var openProfile = false;
var openLogin = false;
var hideProfile = false;
document.getElementById("register-nav").style.display = "block";
document.getElementById("login-nav").style.display = "block";
document.getElementById("profile-nav").style.display = "none";
function openProfilefn() {
    // Login variables
    var loginEmail = document.loginForm.email.value;
    var loginPass = document.loginForm.password.value;
    if (loginEmail === 'samuelhysi@gmail.com' && loginPass === '1234') {
        return this.openProfile = true;
    }
}
function openLoginfn() {
    // Register variables
    var name = document.registerForm.name.value;
    var surname = document.registerForm.surname.value;
    var email = document.registerForm.email.value;
    var password = document.registerForm.password.value;
    var confirmPassowrd = document.registerForm.confirmPassword.value;
    if (
        name.toLowerCase() === 'samuel' &&
        surname.toLowerCase() === 'hysi' &&
        email === 'samuelhysi@gmail.com' &&
        password === '1234' &&
        confirmPassowrd === '1234'
    ) {
        return this.openLogin = true;
    }
}
function openProfilePage() {
    this.openProfilefn();
    if (this.openProfile) {
        window.location.href = "../profile/profile.html";
    }
}
function logedOut() {
    window.location.href = "../home/home.html";
    this.openProfile = false;
}



