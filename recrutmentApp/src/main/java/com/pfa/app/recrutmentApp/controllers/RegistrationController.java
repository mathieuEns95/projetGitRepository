package com.pfa.app.recrutmentApp.controllers;

import com.pfa.app.recrutmentApp.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {
    @Autowired
    private NotificationService notificationService;

    @RequestMapping("/register")
    public String signup(){
        return "svp sign up for our service";
    }

    @RequestMapping("/signup-succes")
    public String signUpSucess(){

        try {
            notificationService.sendMessage();
        }catch (MailException e){
            return "Error : "+e.getMessage();
        }
        return "register sucess ..";
    }
}
