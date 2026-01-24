//legyen az első kocka blur-ős
/* mindig így épül fel:
    -beillesztemni a html pereztációját javascirptként: queryselector/ gelElementedByID stb...
    -eseméyn kiválasztása: onclick
    - funkcionalitás leiirása: fuction() {....}

*/
console.log(document.getElementById("element-one")); //logba kiirja az összes html tulajdonságat felépítéset

//1. classlist kicseréli/hozzá ad egy class-t ami a css-be is van ezért mükodni fog rajta az hogy homályos leszs
//belső állapot hogy ki be lehetesen kapcsolni
var isBlured = false
document.getElementById("element-one").onclick = function () {
    isBlured = !isBlured //logikai változó szóval ha false vagy true akkor az ellenkezőjére cseréli
    if (isBlured) {
        document.getElementById("element-one").classList.add("blur");
    } else {
        document.getElementById("element-one").classList.remove("blur");
    }
    console.log(isBlured) //kiirja true vagy false az értéke
}

//2. háttérszín változás ha fölé viszem az egéret és ha leviszem
//state/állapot
var isHoveredOver = false;

//aciton
document.getElementById("element-two").onmouseover = function () {
    //state change
    isHoveredOver = true;
    renderSecondBox();
}
//aciton
document.getElementById("element-two").onmouseout = function () {
    //state change
    isHoveredOver = false; 
    renderSecondBox();
}
function renderSecondBox() {
    if(isHoveredOver) {
        document.getElementById("element-two").style.backgroundColor = "red";
    } else {
        document.getElementById("element-two").style.backgroundColor = "";
    }
}

//3. dupla kattintásra  sorolojon egy számot 1-20ig
function randomszam(min,max) {
    return Math.floor(Math.random()*(max-min)+min); //mathfloor == legyen egész szám
}

document.getElementById("element-three").ondblclick = function() {
    document.getElementById("element-three").firstElementChild.innerHTML = randomszam(1,20) //a firstelementChild = mindig a hozzá adott css érték legyen akkor is ha módosul az értéke!!!
}


//4. kattintásra tönjön el 1 másodpercre és jelenjen meg újra
document.getElementById("element-four").onclick = function() {
    document.getElementById("element-four").classList.add("hidden");
    setTimeout(function(){
        document.getElementById("element-four").classList.remove("hidden");
    },1000);
}
/* alap timeout ->
setTimeout(function(){
    alert("1 msdoperces késésel jelenik meg");
},1000); // 1 másdoperc
 */

//5. kattintáskor az összes span(kocka) legyen kör
//console.log( document.querySelector(".container"))

document.getElementById("element-five").onclick = function() {
    var boxes = document.querySelectorAll(".shape");//az összes shap div-et érje el
    for(var box of boxes) {
        box.style.borderRadius = "50%";
    }
}

//6. form submit      event object
document.getElementById("box-6").onsubmit = function(event) {
    event.preventDefault(); //nem küld alapvetően http küldést
    document.getElementById("element-six").firstElementChild.innerHTML = event.target.elements.boxNumber.value //boxba beirt értéek kiirása elküldés utan
}

//7. bilentyű leütés onkeypressel real time le lehet kérni a lenyomott billetyüt
document.getElementById("box7-input").onkeypress = function(event) { //azért kell event mert abba vannak az adatok
    console.log(event);
    document.getElementById("element-seven").firstElementChild.innerHTML = event.key;
}

//8. egér kordináta lekérés x és y-ot
//event.clientX ezek a event által kiirt alap onmouseover adatai
document.onmousemove = function(event) {
    console.log(event)
    var cordinate = "X:" +event.clientX + ",Y" + event.clientY;
    console.log(cordinate)
    document.getElementById("element-eight").firstElementChild.innerHTML = cordinate // korditáa megjelitsée html-be
}
//9. számológép
var state = 9;
document.getElementById("box-9").onsubmit =function() {
    
}