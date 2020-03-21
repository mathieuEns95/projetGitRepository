package com.pfa.app.recrutmentApp.controllers;

import com.pfa.app.recrutmentApp.dao.UserRepository;
import com.pfa.app.recrutmentApp.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsersController {


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

    @Autowired
    private UserRepository repository;
    @PostMapping("/saveUsers")
    public String saveUser(@RequestBody List<User> users) {
        repository.saveAll(users);
        return users.size() + " record saved..";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return (List<User>) repository.findAll();
    }

    @GetMapping("/getUserById/{id}")
    public User findUserById(@PathVariable int id) {
        return repository.findById(id);
    }

    @GetMapping("/getUserByName/{name}")
    public User findUserByName(@PathVariable String name) {
        return repository.findByName(name);
    }

}
