window.addEventListener("keypress", formHandler, false);

function formHandler(e) {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
    let button = document.querySelector("#button");

    if (!username || !password) {
        button.setAttribute("disabled");
        return;
    }
    button.removeAttribute("disabled");

    if(e.key === "Enter")
        (function() {
            login()
        })();
};

function login() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let loginBox = document.querySelector("#login-box");
    let welcomeScreen = document.querySelector("#welcome-screen");
    
    // Correct username and password are explicit here as requested for this test.
    if (username === "test" && password === "123") {        
        loginBox.classList.add("hidden");
        welcomeScreen.classList.remove("hidden");
    } else {
        loginBox.classList.add("shake");
        setTimeout(function () {
            loginBox.classList.remove("shake");
        }, 1000);
    }
}
