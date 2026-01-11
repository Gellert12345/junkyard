//30tol átméssz 30 alatt megbuksz
var szam = 60;
if(szam <= 30){
    console.log("megbuktál");
} else {
    console.log("átmentél");
}
var i = 0;
while (i < 1){
    console.log("while ciklusal kiirt szöveg");
    i++; // adunk neki plusz 1 értéket hpgy kilépje  ciklusból mert amitől fut az már nem lesz érvényes
}
for (var f = 0 ;f < 1 ; f++) {
    console.log("for ciklusba minden értéket () kell irni az elején");
}
//ugyan azt kiirja csak 0tol kezdni mert a 0 az 1
d = 0;
while (d < 3) {
    console.log(d);
    d++;
}
var szin = 1;
switch (szin) {
    case 1 :
        console.log("piros");
    case 2 :
        console.log("kék");
    break;
    default: //ha alapvetően semmire se érvényes akkor ezt irja ki
        console.log("nincs ilyen szín");
}

//let és var közötti külömbség
if (1==1) {
    var szam1 = 10;
}
/*
console.log(szam1);
//ezt nem irja ki mert fuctionba tudja elérni azok kivű meg nem 
if (1==1) {
    let szam2 = 11;
}
    
console.log(szam2);
*/


//ha LET-et használnunk for ciklusnal akkor az i-t ujra fel tudjuk hasznalni és nem kell uj variblet lértheozni
for (let i=0; i< 1; i++){
    console.log("for és lett ciklus");
}
// console.log(i); --> error mert 0-tuk a változotót(i)
function negyzet(szam3) {
    return szam3*szam3; // azért kell return hogy barmikor vissza tudjunk ár utalni erre a kód sorra!!! 
}
console.log(negyzet(3)); //9 mert a negyzet az azzal egyenlő hogy szam * szam mert ez előre megírtuk és vissza tudunk ár utlani
console.log(negyzet(10)); // 100

// ugyan ez csak több adatal
let befektetés=function(alapbeadás,növekedés,hányéve){
    let erdemény =(alapbeadás*növekedés*hányéve)/100;
    return erdemény;
}
//100 forint befekteésnél mennyi pézed lesz?
let erdemény1=(befektetés(100,10.3,2)); //igy el tudom menteni az egyik erdmény adatát erdmény1-ként
console.log(erdemény1);
erdemény1 = undefined // ezzel már bármire hasznhataom a erdemny1 változtó hogy mert semmivé tettem mintha nem is létezett volna



function showCity(){
    console.log("newyork");
}
showCity(); //ezzel bármikor kiirhatom a showCity változót

//objectum orietációs programozás:
//object:
var személy  = ({név:"gellért",születésnap:function() {
    return"boldog születésnapot";
}}); //ez egy objectum név = gellért, szüetésnap meg egy fuggvény!! 
console.log(személy);
console.log(személy.név); // vissza tudok utalni specifikus részletekre
console.log(személy.születésnap());