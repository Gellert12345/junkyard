package com.codewithgellert;

import java.util.Random;
import java.util.Scanner; //importalas

public class Main {
    public static void main(String[]args) {
        System.out.println("hello world");
        //comment
        /*
        * bigger
        * comment
        * */
        int inT = 1;
        System.out.println("kiirja" + inT);
        double tizedes = 10.111;
        char egyDB = 'a';
        boolean isStudent = true;

        if(isStudent) {
            System.out.println("Student is true");
        } else {
            System.out.println("Student is false");
        }
        String szöveg = "szia idk";
        System.out.println("tobb egy helyen"+ szöveg + egyDB);


        Scanner scanner = new Scanner(System.in); //adat beolvasas shellbol
        System.out.println("enter your name");
        String name = scanner.nextLine();
        System.out.println("Hello" + name);
        //scanner.close(); // hogy lealljon!!

        //random szam generálás
        Random random = new Random();
        int randomszam = random.nextInt(100);
        System.out.println("randomszam" + randomszam);


        //do while loop(elször lefutt egysuer és csak utánna ellenörzi)
        int i = 0;

        do {
            System.out.println(i);
            i++;
        } while(i < 5);



        int x = 10;
        int y  = 2;
        int z; //mindig előre meg kell irni a valtozot nem lehet siman pl const bol llértehozni
        z = x + y;
        // z= x - y
        // z= x + y
        //z= x *  y
        //z= x / y
        //z= x % y == maradék!!!!!!

        // ne kelljen uj vatlzo akkor x += y  => 12
        System.out.println("x + y =" + z);

        //function ->
        Runnable name1 = () -> {
            System.out.println("asads");
        };

        double result = 3 + 4 * (7-5)/2.0;
        System.out.println("result" + result);

        //shopping cart prgrmoram =>
        Scanner scanner1 = new Scanner(System.in); // user input bekérése terminalbol

        String item;
        double price;
        int quantity;
        char currency = '$';
        double total;
        System.out.print("What item would you like to buy?");
        item = scanner1.nextLine(); //beolvasott adata a item-be lesz def

        System.out.println("What is the price for each");
        price = scanner1.nextDouble();
        System.out.println("price:" + price);

        System.out.println("How many would you like to buy?");
        quantity = scanner1.nextInt();
        System.out.println("quantity:" + quantity);
        total = price * quantity;
        System.out.println("total price" + total + currency);
        scanner1.close();


        //if statement
        int age1 = 25;

        if(age1 >= 18) {
            System.out.println("You are any adult");
        }
        else if  (age1 < 0){
            System.out.println("You havent born yet");
        } else if (age1 == 0 ) {
            System.out.println("you are a baby");
        }
        else {
            System.out.println("You are not any adults");
        }



    }
}