
var quantity = prompt("add meg a darabszámot");
var type = prompt("add meg a tipust");
console.log(quantity);
console.log(type);
var type = {
    student: 300,
    adult: 350,
    retired: 280
}
var price = type[type];
if (price === undefined) {
    alert("érvénytelen tipus");
} else {
    var discount = quantity > 10 ? 0.9 : 1;
    var total = quantity * price * discount;
    alert(total);
}


//számok mennyiségének megszámolása
//while annyit érdekel hogy true vagy false xd
var szamok = [2, 4, 5, 1, 7, 6]
var index = 0;
while (index < 6) {
    console - log(index);
    index++;
}
var paratlan = 0;
//for
for (var i = 0; i < szamok.length; i++) {
    paratlan += szamok[index] % 2 === 1 ? 1 : 0;
}
console.log(paratlan);

// for of ciklus
for (var szam of szamok) { //of vagyis lemásol egy tömböt listát
    console.log(szam);
}

// if else statement
var age = prompt("mi az életkord?");
if (age < 20) {
    alert("fiatalabb mint 20");
} else if (age > 20 && age < 30) {
    alert("idősebb mint 20 de fiatlabb mint 30");
} else {
    alert("idősebb mint 30");
}

//switch
switch (age) {
    case 18:
        console.log("velhasználő 18 éves");
        break;
    case 20:
        console.log("fehasznaló 20 éves");
        break;
    default: //ha semelyik nem teljesül ezt irja ki 
        console.log("a felhasználó életkora ismeretlne");

}

// switch hogy minden szmot lefedjen
switch (true) {
    case age < 20:
        alert("20 évnél fiatalabb");
        break;
    case age > 20 && age < 30:
        alert("20 évnél idősebb 30nál fiatalbb");
        break;
    default:
        console.log("idősebb mint a 30 ");

}
//fuction ez egy lista amibe tudsz tárolni utasításokat
function susdmeg() {
    console.log("önts olajat a servenyőbe");
    fűszerekhozzá()
    console.log("adj hozzá tojást");
    console.log("süsd meg 4 percig");
}

function fűszerekhozzá () {
    console.log("bazsalikom");
    console.log("só");
    console.log("bors");
}


// fuction meghívás/índítás. ==== mind1 hol történik meg mert ugyan ugy le fog futtni
susdmeg();

//function mint  matematikai függvény(input adat=> output adat generálás)
function addOne(szam) {
    console.log(szam);
    return szam +1;
}
addOne(5); // hozzá ad a számokhoz 5öt kiirásnál
console.log(addOne(addOne(3)));

//table look up
function addTwo(szam) {
    return{
        0: 2,
        1: 3,
        2: 4
    }[szam]
}
console.log(addTwo(addTwo(0)))

//function = first class citizen
var addThree = function(szam) {
    return szam + 3
};
addThree(4)
console.log(addThree(3)) 

//object

var window = {
    log: function(msg){
        //log msg
    }
}
window.console.log("szia");