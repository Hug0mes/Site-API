function getProfile(){
    var token = localStorage.getItem("token");

    if (token != null){
        fetch('http://ganwars.fun/api/profile', {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => res.json())
            .then(res => showProfile(res));
    }

}

function showProfile(res){
    document.getElementById("welcome").innerText = "Welcome " + res.user.username;
    document.getElementById("email").innerText = "Email: " + res.user.email;

    getUsers();

}


function getUsers(){
    var token = localStorage.getItem("token");

    if (token != null){
        fetch('http://ganwars.fun/api/users', {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => res.json())
            .then(res => showUsers(res));
    }
}

function showUsers(res){

    for (let i = 0; i < res.users.length; i++) {
        var li = document.createElement('li');
        if (i % 2 != 0){
            li.style.color = "red";
        }
        else{
            li.style.color = "green";
        }

        li.innerText = res.users[i].username;
        document.getElementById("list").appendChild(li);
    }

}