console.log(
    {
    firstname: "joe",
    lastname: "doe",
    age: 30
    }["lastname"]
);

console.log(
    {
    firstname2: "joe",
    lastname2: "doe",
    age2: 30,
    address: {
        street: "király utca",
        city: "budapest"
    } 
}
);

//telefon  azonsító
console.log(
    {
    márka: "apple",
    tipus: "iphone 17",
    ára: "350.000",
    hálózatadat: {
        ország: "HU",
        szolgáltató: "Telekom"
    }
    },
    {
    márka: "samsung",
    tipus: "s25 ultra",
    ára: "450.000",
    hálózatadat: {
        ország: "HU",
        szolgáltató: "vodafone" 
    }
    },
    
    {
    márka: "samsung",
    tipus: "s25 ultra",
    ára: "450.000",
    hálózatadat: {
        ország: "HU",
        szolgáltató: "vodafone"
    }[2].hálózatadat.ország // 2-es vagyis a 3. elem és annak az országa
})
// operátorok->

//aritmetikai  operátorok
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
//összehasonlító  operátorok
console.log(2 == 2); //output true vagyis ezek a opeprázorok true vagy false erdmény adnak
console.log(2 != 2);
console.log(2 === "2");
console.log(2 > 2);
console.log(2 < 2);
console.log(2 >= 2);
console.log(2 <= 2);
console.log(true && true); //    && az a és oprátor
console.log(true || true);  // ||vagy operátor
console.log(!true); //truebol csinál egy false-t
//lehet az égeszet mixelni:
console.log(2 == 2 && 1> 5);
console.log((2+2)*5); //= 20
console.log("szia"+"console");
//változok:
var üdvözlés;
üdvözlés = "szia";
console.log(üdvözlés);
üdvözlés = 3;
console.log(üdvözlés);
üdvözlés++;
console.log(üdvözlés);
üdvözlés--;
console.log(üdvözlés);

var szam = 5;
szam+=10;
console.log(szam); //15 mert a += az annyit jelet hogy ennyit ad még hozzá
//de bérmit haszhatunk
szam -= 10;
szam /= 10;
szam *= 10;
szam %= 10;