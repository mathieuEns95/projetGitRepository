package com.pfa.app.recrutmentApp.controllers;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/recruitment/connect")
public class RecrutementController {
    @RequestMapping(value =  "/checkConnection", method = RequestMethod.GET)
    public boolean connect(String username, String password){
        return true;
    }

}
