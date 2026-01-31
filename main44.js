//proceduráis paradigma

var product = {
    name:"fűnyíró",
    price: 1210,
    isinstock: true,
};
product.price *= 0.9;
var message = `
    A termék neve: ${product.name},
    ára: ${product.price},
    és ${product.isinstock ? "van készleten" : "nincs készleten"}
    `
console.log(message)

//funkcionális paradigma == pure fuction (pipe line)
function withdiscount(product,discount) {
    return {
    name: product.name,
    price: product.price * discount,
    isinstock: product.isinstock,
    }
}
function tomessage(product) {
return `
    A termék neve: ${product.name},
    ára: ${product.price},
    és ${product.isinstock ? "van készleten" : "nincs készleten"}
    `
}
var product2 = {
    name:"fűnyíró",
    price: 1210,
    isinstock: true,
};
console.log(tomessage(withdiscount(product2,0.9)))

//objectum orientált paradigma
var Product = {
    //property:
    name: "Fűnyíró",
    price: 2000,
    isinstock: true,
    //method:
    //objectum orinetált number -> void
    applyDiscount: function(discount) {
    // a .this kulcso az egész  objetumba mutat itt (Product)
        this.price = this.price * discount
    },
    //semmiből stringet fgenrál
    getMessage: function() { // this vagyis csak ebben a ojbetum irt adat alapjan dolgozik
        return  `
    A termék neve: ${this.name},
    ára: ${this.price},
    és ${this.isinstock ? "van készleten" : "nincs készleten"}
    `
    }
}
Product.applyDiscount(0.9);
console.log(Product.getMessage())


//funkciónális: (objectum tervrajz)

function Termék(name,price,isinstock) {
    this.name = name;
    this.price = price;
    this.isinstock = isinstock;
}
Termék.prototype.applyDiscount = function(discounts) {
    this.price = this.price * discounts;

}
Termék.prototype.getMessage = function () {
    return`
    A termék neve: ${this.name},
    ára: ${this.price},
    és ${this.isinstock ? "van készleten" : "nincs készleten"}
    `    
}
 
console.log(
    new Termék("kalapács",1500,true),
    new Termék("csésze",1000,true),
    new Termék("nemtudom",9000,false)
);
var termékek = [
    new Termék("kalapács",1500,true),
    new Termék("csésze",1000,true),
    new Termék("nemtudom",9000,false)    
]
for(var Termék of termékek){// egyesével kiirja!!
    Termék.getMessage()
}

//class dekrláció
class termek_ {
    quanity = 10
    constructor(name,price,isinstock) {
        this.name = name;
        this.price = price;
        this.isinstock = isinstock;
    }
    applyDiscount(discount) {
        this.price = this.price * discount;
    }
    getMessage() {
        return `
        A termék neve: ${this.name},
        Ára: ${this.price} és
        ${this.isinstock ? "van készleten" : "nincs készleten"};
        `
    }
}
var termek2 = new termek_("Áso",4300,false)
termek2.applyDiscount(0.8)
termek2.applyDiscount(0.3)
termek2.applyDiscount(0.7)
console.log(termek2.getMessage)


console.log(new termek_("Áso",4300,false))