function register() {
    alert("Register button pressed");

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var Rpassword = document.getElementById("Rpassword").value;
    var birthday = document.getElementById("birthday").value; //formato ano-mes-dia

    if (password == Rpassword) {
        fetch('http://gangwars.fun/api/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                birthdate: birthday
            })
        }).then(res => res.json())
            .then(res => checkRegister(res));
    }

}

function checkRegister(res) {
    console.log(res);
    if (res.message == "CREATED") {
        alert("Conta criada com sucesso!");
    } else {
        alert("Erro");
    }
}

function login() {
    alert("Login button pressed");

    var email = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;

    fetch('http://gangwars.fun/api/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json())
        .then(res => checkLogin(res));

}

function checkLogin(res) {
    if (res.token != null) {
        alert("Login com sucesso!");
        localStorage.setItem("token", res.token);
        location.replace("./UserArea.html");
    }
    else {
        alert("Erro!");
    }
}