package com.pfa.app.recrutmentApp.controllers;


import com.pfa.app.recrutmentApp.models.Candidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CandidateController {

    @RequestMapping("/testCandidateWebService")
    public String addCandidate(String id, String firstName, String lastName,
                          String adress, String email, String nationalite,
                          int phone, String gender, String birthday, String pasword){

        return "id : "+id+
                "<br> first name : " +firstName+
                "<br> last name : "+lastName+
                "<br> address : "+adress+
                "<br> email : "+email+
                "<br> nationality : "+nationalite+
                "<br> phone : "+phone+
                "<br> gender : "+gender+
                "<br> birthday : "+birthday+
                "<br> password : "+pasword;
    }

//    @Autowired
//    private CandidateRepository repository;
//    @PostMapping("/saveCandidates")
//    public String saveUser(@RequestBody List<Candidate> candidates) {
//        //repository.saveAll(candidates);
//        return candidates.size() + " record saved..";
//    }
//
//    @GetMapping("/getAllCandidates")
//    public List<Candidate> getAllUsers() {
//        return (List<Candidate>) repository.findAll();
//    }
//
//    @GetMapping("/getCandidateById/{id}")
//    public Candidate findUserById(@PathVariable int id) {
//        return repository.findById(id);
//    }
//
//    @GetMapping("/getCandidateByName/{name}")
//    public Candidate findUserByName(@PathVariable String name) {
//        return repository.findByName(name);
//    }

}
