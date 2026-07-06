package com.example.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class FoodItems {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id; //id => (primary key)
    private String name;
    private double price;
    //getters and setters apply
    public int getId() {
        return id;
    }
    public void setId(int,id) {
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