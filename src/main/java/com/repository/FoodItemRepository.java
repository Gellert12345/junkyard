package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository
import com.example.demo.entity.FoodItems

public interface FoodItemRepository extends JpaRepository<FoodItems, Long>{

}