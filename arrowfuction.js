var addone = function(szam) { // ami a ()-be van azt várja afuctin be!!
    return szam + 1;

}
//ez a 2 db ugyan az csak rövidebben!
var addone = szam => szam+1;



//gykorlati szerep.
fetch("https://reqres.in/api/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(content){
        console.log(content)
    })


//röviden arrow fuctinoal ez.
fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(function(content) {
        console.log(content)
    })
// ha szeretnél bele új adatot akkor.
fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(page => page.data[0]) //api kulcsbol van kiszedve
    .then(user => {
        const name = `${user.first_name} ${user.last_name}`
        return name; //azert kell rutrn hogy tovább menjen a fuction a másik .then-re!
    })
    //rökötn return egy objectel:
    .then( name =>({userName:name}))
    .then(function(content) {
        console.log(content)
    })

var szamoklista = [3,4,5,2,34,5,2]
    .filter(kettoveloszthatószamok => kettoveloszthatószamok %2 === 0)
    //vagy ha minden szmot el akarjuk osztani 2vel:
    .map(kettoveloszthatószamok => kettoveloszthatószamok % 2)
    //ha az összeget akarjuk kiszamolni:
    .reduce((acc,cr)=> acc + cr)
console.log(szamoklista)