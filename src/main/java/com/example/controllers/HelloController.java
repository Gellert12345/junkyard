package com.example.controllers;

//impotz minden minz react-ba
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//ettol lesz restApi-s backend controller file mint a javascirpt-be
@RestController

public class HelloController {
    // folyamatosan figyeli
    @GetMapping("/") // api end point
    public String hello() {
        return "Hello word";
    }
}