package com.example.demo.enity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//Annotáciok == @-Al kezdődő dolgok!!

//building the DB schema (like json)
@Entity // ez jelzi hogy adatbazis tabla lesz a fileba
public class FoodItems {
    @Id //ez jelzi hogy az Id a primary key
    @GeneratedValue(strategy=GenerationType.IDENTITY)//generál egy id magatol pl 1,2,3 stb ne magadtol keljen
    //megadjak hogy külsöleg ne lehesen válotztatni és dekraláljuk
    private int id; //id => (primary key)
    private String name;
    private double price;
    public FoodItems(int id,String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    //getters and setters apply
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }

}