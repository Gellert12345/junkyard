package com.example.controllers;

import org.springframework.web.bind.annotation.RestController; //to can req res stb
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    // get all food items {read}
    @GetMapping
    public List<FoodItems> getAllFoodItems() {
        return foodItemRepository.findAll();
    }

    // post a food item {creat}
    @PostMapping
    public FoodItems createFoodItems(FoodItems foodItems) {
        return foodItemRepository.save(foodItems);
    }

    // get food item by id{read}
    @GetMapping("{/id}")
    public FoodItems getFoodItemById(int id) {
        return foodItemRepository.findById(id).orElse(null);
    }

    // update food item by id {update}
    @PutMapping("{/id}")
    public FoodItems updaFoodItems(int id, FoodItems foodItemsDetails) {
        // deklarájuk a változoót és érétket adunk neki
        FoodItems foodItem = foodItemRepository.findById(id).orElse(null);
        if (foodItem != null) {
            foodItem.setName(foodItemsDetails.getName());
            foodItem.setPrice(foodItemsDetails.getPrice());
            return foodItemRepository.save(foodItem);
        }
        return null;
    }

    // delete by id =>
    @DeleteMapping("/{id}")
    public void deletFoodItem(@PathVariable int id) {
        foodItemRepository.deleteById(id);
    }
}