package com.example.controllers;

import org.springframework.web.bind.annotation.RestController; //to can req res stb
import org.springframework.web.bind.annotation.RequestMapping;  //so i can list the api endpoint
import com.example.repository.FoodItemRepository;

@RestController
@RequestMapping("/api/foods")
//http request and response
public class FoodItemController {
    private final FoodItemRepository foodItemRepository;

    public FoodItemController(FoodItemRepository foodItemRepository){
        this.foodItemRepository = foodItemRepository;
    }

}