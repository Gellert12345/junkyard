
var state = [] //alkalmazás állapot tárolom a felhasznalok listajat!!

document.getElementById("login").onsubmit = function(event) {
    event.preventDefault();
    var email = event.target.elements.email.value; //target element az a htmlbe a formnak a neve!! name="email"
    var password = event.target.elements.password.value;
    var body = JSON.stringify({ //html adatot json szövegre alakítod hogy a szerver tudja értelemezni
        email:email,
        password:password
    })
    fetch("https://reqres.in/api/login", { //api hívás
        method:"POST", //adatot küldök
        body:body, // a json 
        headers: {
            "Content-type":"application/json" //jelzem a szervernek hogy json küldök
        }
    })
    .then(function(response){
        if (!response.ok) {
            return Promise.reject("Bejelentkezés sikertelen"); // reject === röktön a catacheb dobja ha hiba van!!
        }
        return response.json();
    })
    .then(function(response) {
        return fetch("https://reqres.in/api/users")
    })
    .then(function(response) {
        if(!response.ok) {
            return Promise.reject("users error")
        }
        return response.json()
    })
    .then(function(userPage){
        //action
        console.log(userPage);
        //state change
        state = userPage.data;
        //renderelés
    })
    .catch(function(error){
        alert(error)
    });
}
function renderUsers() {
    var usersHTML=""; //userhtml az user-list-conatiner ami meg majd innerHTML lesz 
    for(var user of state) {
        usersHTML += `<li class="list-group-iteam">${user.first_name} ${user.last_name}</li>` // += legyel az ami voltál csak adj hozzá a plusz elemeket
    }
    document.getElementById("user-list-container").innerHTML = `<ul class="list-group">` + usersHTML + `</ul>`;
}