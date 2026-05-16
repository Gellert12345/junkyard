
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main1 {

    /*
     * OSZTÁLYSZINTŰ VÁLTOZÓK
     * static = az osztályhoz tartozik, nem egy példányhoz
     * final = nem változtatható meg később
     */
    static String globalMessage = "Ez egy static változó";
    static final double PI = 3.14159;

    public static void main(String[] args) {

        // -----------------------------------
        // 1. KIÍRÁS
        // -----------------------------------
        System.out.println("Hello Java!");
        System.out.print("Ez egy sorban marad. ");
        System.out.println("Ez ugyanabban a sorban folytatódott.");

        // -----------------------------------
        // 2. VÁLTOZÓK
        // -----------------------------------
        int age = 20;               // egész szám
        double price = 1999.99;     // tizedes szám
        char grade = 'A';           // egyetlen karakter
        boolean isStudent = true;   // igaz/hamis
        String name = "Gellert";    // szöveg

        System.out.println("Nev: " + name);
        System.out.println("Kor: " + age);
        System.out.println("Ar: " + price);
        System.out.println("Jegy: " + grade);
        System.out.println("Diak? " + isStudent);

        // final = konstans, később nem írhatod felül
        final int MAX_USERS = 100;
        System.out.println("Max users: " + MAX_USERS);

        // -----------------------------------
        // 3. ALAP OPERÁTOROK
        // -----------------------------------
        int a = 10;
        int b = 3;

        System.out.println("Osszeadas: " + (a + b));
        System.out.println("Kivonas: " + (a - b));
        System.out.println("Szorzas: " + (a * b));
        System.out.println("Osztas: " + (a / b));     // int osztás -> 3
        System.out.println("Maradek: " + (a % b));    // modulo -> 1

        double result = 10 / 3.0; // ha egyik double, akkor nem egész osztás
        System.out.println("Pontos osztas: " + result);

        // rövidített írásmódok
        int counter = 0;
        counter++;
        counter += 5;
        counter--;
        System.out.println("Counter: " + counter);

        // -----------------------------------
        // 4. STRING ALAPOK
        // -----------------------------------
        String firstName = "Kecskes";
        String lastName = "Gellert";
        String fullName = firstName + " " + lastName;

        System.out.println("Teljes nev: " + fullName);
        System.out.println("Hossz: " + fullName.length());
        System.out.println("Kisbetus: " + fullName.toLowerCase());
        System.out.println("Nagybetus: " + fullName.toUpperCase());
        System.out.println("Tartalmazza? " + fullName.contains("Gellert"));

        // -----------------------------------
        // 5. IF / ELSE
        // -----------------------------------
        int number = 18;

        if (number > 18) {
            System.out.println("18-nal nagyobb");
        } else if (number == 18) {
            System.out.println("Pont 18");
        } else {
            System.out.println("18-nal kisebb");
        }

        // logikai operátorok
        int userAge = 22;
        boolean hasTicket = true;

        if (userAge >= 18 && hasTicket) {
            System.out.println("Belephet");
        }

        if (userAge < 18 || hasTicket) {
            System.out.println("Legalabb az egyik feltetel igaz");
        }

        if (!hasTicket) {
            System.out.println("Nincs jegye");
        }

        // -----------------------------------
        // 6. SWITCH
        // -----------------------------------
        int day = 3;

        switch (day) {
            case 1:
                System.out.println("Hetfo");
                break;
            case 2:
                System.out.println("Kedd");
                break;
            case 3:
                System.out.println("Szerda");
                break;
            default:
                System.out.println("Mas nap");
        }

        // -----------------------------------
        // 7. LOOP-OK
        // -----------------------------------

        // for
        for (int i = 0; i < 5; i++) {
            System.out.println("for i = " + i);
        }

        // while
        int i = 0;
        while (i < 3) {
            System.out.println("while i = " + i);
            i++;
        }

        // do-while
        int j = 0;
        do {
            System.out.println("do-while j = " + j);
            j++;
        } while (j < 3);

        // break és continue
        for (int k = 0; k < 5; k++) {
            if (k == 2) {
                continue; // átugorja ezt a kört
            }
            if (k == 4) {
                break; // kilép a ciklusból
            }
            System.out.println("k = " + k);
        }

        // -----------------------------------
        // 8. TÖMBÖK (ARRAY)
        // -----------------------------------
        int[] numbers = {10, 20, 30, 40};

        System.out.println("Elso elem: " + numbers[0]);
        numbers[1] = 99;
        System.out.println("Masodik elem uj erteke: " + numbers[1]);
        System.out.println("Tomb hossza: " + numbers.length);

        for (int index = 0; index < numbers.length; index++) {
            System.out.println("numbers[" + index + "] = " + numbers[index]);
        }

        // foreach
        for (int item : numbers) {
            System.out.println("foreach elem: " + item);
        }

        // -----------------------------------
        // 9. ARRAYLIST
        // -----------------------------------
        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("alma");
        fruits.add("banan");
        fruits.add("korte");

        System.out.println("ArrayList: " + fruits);
        System.out.println("Elso gyumolcs: " + fruits.get(0));

        fruits.set(1, "narancs");
        fruits.remove("korte");

        for (String fruit : fruits) {
            System.out.println("Gyumolcs: " + fruit);
        }

        // -----------------------------------
        // 10. METÓDUSOK
        // -----------------------------------
        sayHello();
        sayHelloTo("Gellert");

        int sum = add(5, 7);
        System.out.println("Osszeg: " + sum);

        double circleArea = calculateCircleArea(5);
        System.out.println("Kor terulete: " + circleArea);

        // method overloading = ugyanaz a metódusnév, más paraméterek
        System.out.println("Dupla szam: " + multiply(2, 3));
        System.out.println("Dupla tizedes: " + multiply(2.5, 4.0));

        // -----------------------------------
        // 11. SZKENNER / FELHASZNÁLÓI INPUT
        // -----------------------------------
        Scanner scanner = new Scanner(System.in);

        System.out.print("Add meg a neved: ");
        String userName = scanner.nextLine();

        System.out.print("Add meg az eletkorod: ");
        int inputAge = scanner.nextInt();

        System.out.println("Szia " + userName + ", eletkorod: " + inputAge);

        // Fontos:
        // ha nextInt() után nextLine() jön, akkor sokszor kell egy extra nextLine()
        // mert a sortörést bent hagyja a bemenetben

        scanner.nextLine(); // kitakarítja a bent maradt Entert

        System.out.print("Kedvenc szined: ");
        String color = scanner.nextLine();
        System.out.println("Kedvenc szined: " + color);

        scanner.close();

        // -----------------------------------
        // 12. OBJEKTUMOK ÉS OSZTÁLYOK
        // -----------------------------------
        Person person1 = new Person("Anna", 21);
        Person person2 = new Person("Bela", 30);

        person1.introduce();
        person2.introduce();

        // getter
        System.out.println("person1 neve: " + person1.getName());

        // setter
        person1.setAge(22);
        System.out.println("person1 uj kora: " + person1.getAge());

        // static tag elérés
        System.out.println(globalMessage);

        // -----------------------------------
        // 13. INHERITANCE / ÖRÖKLŐDÉS
        // -----------------------------------
        Dog dog = new Dog("Morzsi", 4);
        dog.introduce();
        dog.bark();

        // -----------------------------------
        // 14. ENCAPSULATION
        // -----------------------------------
        // private változókhoz getter/setter kell
        BankAccount account = new BankAccount("Gellert", 5000);
        account.deposit(2000);
        account.withdraw(1000);
        System.out.println("Tulaj: " + account.getOwner());
        System.out.println("Egyenleg: " + account.getBalance());

        // -----------------------------------
        // 15. POLYMORPHISM
        // -----------------------------------
        Animal myAnimal = new Animal("Valami allat", 2);
        Animal myDog = new Dog("Buksi", 5);

        myAnimal.makeSound();
        myDog.makeSound();

        // -----------------------------------
        // 16. EXCEPTION KEZELÉS
        // -----------------------------------
        try {
            int division = 10 / 0;
            System.out.println(division);
        } catch (ArithmeticException e) {
            System.out.println("Hiba: nullaval nem lehet osztani");
        } finally {
            System.out.println("A finally blokk mindig lefut");
        }

        // -----------------------------------
        // 17. HASZNOS BEÉPÍTETT SEGÉDEK
        // -----------------------------------
        int[] arr = {5, 1, 9, 2};
        Arrays.sort(arr);
        System.out.println("Rendezett tomb: " + Arrays.toString(arr));

        // -----------------------------------
        // 18. TERNARY OPERATOR
        // -----------------------------------
        int score = 75;
        String passed = (score >= 50) ? "Atment" : "Megbukott";
        System.out.println(passed);

        // -----------------------------------
        // 19. CASTING
        // -----------------------------------
        double bigNumber = 9.99;
        int smallNumber = (int) bigNumber; // levágja a tizedest
        System.out.println("Castolt ertek: " + smallNumber);

        // -----------------------------------
        // 20. ÖSSZEFOGLALÁS
        // -----------------------------------
        System.out.println("A Java alapjai koze tartozik:");
        System.out.println("- valtozok");
        System.out.println("- if / else");
        System.out.println("- loopok");
        System.out.println("- tombok es listak");
        System.out.println("- metodusok");
        System.out.println("- osztalyok es objektumok");
        System.out.println("- oroklodes");
        System.out.println("- exception kezeles");
    }

    // -----------------------------------
    // METÓDUSOK
    // -----------------------------------

    public static void sayHello() {
        System.out.println("Hello a methodbol");
    }

    public static void sayHelloTo(String name) {
        System.out.println("Hello " + name);
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static double calculateCircleArea(double radius) {
        return PI * radius * radius;
    }

    // overloadolt metódus
    public static int multiply(int a, int b) {
        return a * b;
    }

    public static double multiply(double a, double b) {
        return a * b;
    }
}

// -----------------------------------
// SAJÁT OSZTÁLY
// -----------------------------------
class Person {
    private String name;
    private int age;

    // konstruktor = objektum létrehozásakor fut
    public Person(String name, int age) {
        this.name = name; // this = az aktuális objektum
        this.age = age;
    }

    public void introduce() {
        System.out.println("Szia, a nevem " + name + ", es " + age + " eves vagyok.");
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
}

// -----------------------------------
// SZÜLŐ OSZTÁLY
// -----------------------------------
class Animal {
    protected String name;
    protected int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void introduce() {
        System.out.println("Allat neve: " + name + ", kor: " + age);
    }

    public void makeSound() {
        System.out.println("Az allat ad valami hangot");
    }
}

// -----------------------------------
// LESZÁRMAZOTT OSZTÁLY
// extends = öröklődés
// -----------------------------------
class Dog extends Animal {

    public Dog(String name, int age) {
        super(name, age); // a szülő konstruktorát hívja
    }

    public void bark() {
        System.out.println(name + " ugat: Vau vau!");
    }

    @Override
    public void makeSound() {
        System.out.println(name + " hangja: Vau!");
    }
}

// -----------------------------------
// ENCAPSULATION PÉLDA
// -----------------------------------
class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Sikertelen penzfelvetel");
        }
    }

    public String getOwner() {
        return owner;
    }

    public double getBalance() {
        return balance;
    }
}
