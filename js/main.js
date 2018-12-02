function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
//    Correct username and password are explicit here as requested for this test.
    if (username === "test" && password === "123") {
        const loginBox = document.getElementById("login-box");
        loginBox.classList.add("hidden");
        
        const welcomeScreen = document.getElementById("welcome-screen");
        welcomeScreen.classList.remove("hidden");
    }
    else
        alert("WRONG");
}
