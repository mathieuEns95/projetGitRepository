package com.pfa.app.recrutmentApp.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/recrutment/register")
public class UsersController {
    @RequestMapping(value = "/userRegistration", method = RequestMethod.GET)
    public String addCandidate(String id, String firstName, String lastName,
                          String adress, String email, String nationalite,
                          int phone, String gender, String birthday, String pasword){

        return "id : "+id+
                "\n first name : " +firstName+
                "\n last name : "+lastName+
                "\n address : "+adress+
                "\n email : "+email+
                "\n nationality : "+nationalite+
                "\n phone : "+phone+
                "\n gender : "+gender+
                "\n birthday : "+birthday+
                "\n password : "+pasword;
    }

    public String addAdmin(String id, String firstName, String lastName, String email,
                           String gender, String password){

        return "id : "+id+
                "\n first name : "+firstName+
                "\n last name : "+lastName+
                "\n email : "+email+
                "\n gender : "+gender+
                "\n password : "+password;
    }

}
