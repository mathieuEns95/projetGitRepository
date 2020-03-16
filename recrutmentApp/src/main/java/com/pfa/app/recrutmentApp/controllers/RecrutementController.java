package com.pfa.app.recrutmentApp.controllers;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/recrutment/connect")
public class RecrutementController {
    @RequestMapping(value =  "/checkConnection", method = RequestMethod.GET)
    public boolean connect(String username, String password){
        System.out.println(username);
        System.out.println(password);
        if (username.equals("admin") && password.equals("root")){
            return true;
        }else {

            return false;
        }
    }


}
