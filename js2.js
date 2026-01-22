
var quantity = prompt("add meg a darabszámot");
var type = prompt("add meg a tipust");
console.log(quantity);
console.log(type);
var type = {
    student: 300,
    adult: 350,
    retired: 280
}
var price = type(type); 
var discount = quantity > 10 ? 0.9 : 1;
var total = quantity * price*discount;
console.log(total); 

//számok mennyiségének megszámolása
//while annyit érdekel hogy true vagy false xd
var szamok =[2,4,5,1,7,6]
var index = 0;
while (index < 6) {
    console-log(index);
    index++;
}
var paratlan = 0;
//for
for(var i = 0; i < szamok.length;i++){
    paratlan += szamok[index] %2 === 1? 1:0;
}
console.log(paratlan); 

// for of ciklus
for (var szam of szamok) { //of vagyis lemásol egy tömböt listát
    console.log(szam);
}

// if else statement
var age = prompt("mi az életkord?");
if (age <20) {
    alert("fiatalabb mint 20");
} else {
    alert("idősebb mint 20");
}