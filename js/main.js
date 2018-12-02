$(document).on("keyup",function(e){

    let username = $("#username").val();
    let password = $("#password").val();

    if (!username || !password) {
        $("#button").prop('disabled', true);
        return;
    }

    $("#button").prop('disabled', false);

    if(e.key === "Enter")
        login();

});


function login() {
    let username = $("#username").val();
    let password = $("#password").val();
    
    // Correct username and password are explicit here as requested for this test.
    if (username === "test" && password === "123") {
        $("#login-box").addClass("hidden");
        $("#welcome-screen").removeClass("hidden");
    }
    else {
        $("#login-box").addClass("shake");
        setTimeout(function () {
            $('#login-box').removeClass("shake");
        }, 1000);

    }

}
