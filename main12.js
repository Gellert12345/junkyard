//ajax kérések backend == vagyis oldal ujratöltés nélkül frissül az oldal!!!!
//post az ami a fronted küld a backendnek
document.getElementById("login").onclick = function() {
    var url ="https://regres.in/api/login"; //ide üldi el a felhasznalói adatot
    //bejeltkezés adatok beégetése:
    var body = JSON.stringify({ //JSOn stringify == szövegre konvertál a backendnek
        email:"eve.holt@regres.in",
        password:"cityslicka"
    })
    sendRequest(url,method,body, function(token){
        sendRequest("https://regres.in/api/users","GET", null, function(users) {
            console.log(users);
            sendRequest("https://regres.in/api/tovabbiEroforras1","GET",null,function(eroforrras1){
                console.log(eroforrras1);
                sendRequest("https://regres.in/api/tovabbiEroforras2","GET",null,function(eroforras2){
                    console.log(eroforras2);
                })
            })
        })
    })
}
//url = hova küldi, method az =mit ,body = milyen adatal , callback = mit csinaljak az erdményel !!
function sendRequest(url,method,body,callback) {
    var xhr = new XMLHttpRequest(); // api kérés
    xhr.onreadystatechange = function() { //api figyelés
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText)); //vissza alakítjuk a stringet ojbekutám
        }
    }
    xhr.open(method,url); //össze rakjuk  requestet
    xhr.setRequestHeader("content-type","application/json"); //hoy mit küldünkxhr.setRequestHeader("content-type","application/json"); //hoy mit küldünk
    xhr.send(body)
}