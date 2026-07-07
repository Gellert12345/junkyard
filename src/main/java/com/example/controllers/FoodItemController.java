package com.example.controllers;

import org.springframework.web.bind.annotation.RestController //to can req res stb
import org.springframework.web.bind.annotation.RequestMapping  //so i can list the api endpoint


@RestController
@RequestMapping("/api/foods")
//http request and response
public class FoodItemController {
    public FoodItemController(FoodItemRepository FoodItemRepository){
        this.FoodItemRepository = FoodItemRepository;
    }

}