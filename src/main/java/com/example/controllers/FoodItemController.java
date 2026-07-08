package com.example.controllers;

import org.springframework.web.bind.annotation.RestController; //to can req res stb
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping; //so i can list the api endpoint
import com.example.repository.FoodItemRepository;
import java.util.List;
import com.example.demo.enity.FoodItems;

@RestController
@RequestMapping("/api/foods")
// http request and response
public class FoodItemController {
    private final FoodItemRepository foodItemRepository; // FoodI.. = típus(tervrajz) foodI.. = (variable)

    public FoodItemController(FoodItemRepository foodItemRepository) {
        this.foodItemRepository = foodItemRepository;
    }

    @GetMapping
    public List<FoodItems> getAllFoodItems() {
        return foodItemRepository.findAll();
    }

    @PostMapping
    public FoodItems createFoodItems(FoodItems foodItems) {
        return foodItemRepository.save(foodItems);
    }
}