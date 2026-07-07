package com.example.repository; //code melyik mappaba lakik

import org.springframework.data.jpa.repository.JpaRepository; //importaljak egy spring libaryt adabazisokhoz
import com.example.demo.enity.FoodItems; //importlajuka az egyik class schemat egy másik codebol

// 4. Egy adatbázis-kezelő interfész (Repository), amely a Spring Data JPA-ból örökli a CRUD műveleteket.
// A kacsacsőrben megadjuk az entitás osztályt (FoodItems) és annak elsődleges kulcsának típusát (Long).
public interface FoodItemRepository extends JpaRepository<FoodItems, Long>{

}