//cargo.toml === package.JSON
fn main() { //fn === function
    println!("Hello, world!");
    teszt(); //meg kell hívni a másik fucntuon hogy le tudjin futtni

}
//data type:
// i= signed integers, u = unsigned integers
/*
u = 0 és pozítv szamok
i = pozítív negativ + 0
i8 = 8 a másodikon szóval -128 és + 127 = 256 de nem lehet pozítva be ennyi max 127
*/
fn teszt() {
    let x: i32 = 42; //x vltozó i32 érékt bite ami 42 az értéke!!
    let y: u64 = 100;
    println!("érékek: {}",x); //{} azt mutatja hogy ide fogom berakni az x érééket kiirasokor
    println!("érétkek: {}",y);
    //float vagyis tizedes érétke is van vagy lehet f32/f64
    let pi:f64 = 3.14;
    println!("pi éréke: {}",pi);
    //boolean === true or false
    let is_snowing:bool = true; //bool vagyis megadjuk az adat tipusat
    println!("Is it snowing?{}",is_snowing);
    //karakter tipusa = char
    let letter:char = 'a';
    println!(" first letter in the alphabet is {}",letter);
    teszt2();
}

// összetett adattipusok == array, tupels, slices, strings
// ::: kell tipus pl i8
// === kell érétke adaáskor pl  = 1
/*
{} = sima kiirás
{:?} = strukturált kiirás (látod a sorrendet,látod hogy tömb,sorrendet)
*/
fn teszt2() {
    let numbers: [i32;5] = [1,2,3,4,5]; //5 mert annyi érétk van benn(db)
    println!("NUmber array: {:?}",numbers);
    teszt3();
}
//string arrey
fn teszt3() {
    let fruits: [&str;3] = ["apple","bannana","oranger"];
    println!("fruits array: {:?}",fruits); //összes gyümölcs
    println!("első fruits: {}",fruits[0]); //első gyümölcs
    //tupels == összetett arrey szám strign bármi mehet bele egyszere
    let humans:(String,i32,bool) = ("Alice".to_string(),20,false); //mert nem string volt hanem string slice(&str)
    println!("Human array: {:?}",humans);
    let mix_tople = ("Kratos",20,false,[1,2,3,4,5]);
    println!("mix_tople: {:?}",mix_tople);
    //slices:
    let numbers_slices:&[i32] = &[1,2,3,4,5]; // & = referencia, [T] = slice (méret nélküli nézet egy tömbre)
    println!("numbers_slices: {:?}",numbers_slices);
    let animal_slice: &[&str]= &["lion","seal","idk"]; //ki van mi tulajdonol az adatot == &
    println!("animal_slice: {:?}",animal_slice);
    //vmi más
    let book_slice:&[&String] = & [&"IT".to_string(),
    &"Harry Potter".to_string(), &"Zen".to_string()];
    println!("book_slice: {:?}",numbers_slices);
    //string vs string slices(&str)= kölcsön vett ami máshol "él"
    //string type = growable,mutable,owned string type
    // ez azért kell mert nem olyan mitn a Js "2"+ 4 = 6 de itt nekünk kell külön megcsinalni
    //mut = változó változtaható lesz mert alaból semelyik se az ézrt tudok bele psholni több szöveget
    let mut stone_cold: String = String::from("hell"); //from az konverál pl stirng to &str mert a "hell" az nem strign hanem stringe slcie
    println!("stone cold says: {}",stone_cold);
    stone_cold.push_str("yeah!"); //push nem törli az előző tartalmat hanem c sak hozzá adja vagyis output == hell yeah lesz
    println!("stonencold says: {}",stone_cold);
    //str sclie &str az valhol máshol akódba van deviniélva ésmén csak máshol fehasznalomde  nem tudom módósiítani!
    let string: String = String::from("hello,word");
    let slice:
}