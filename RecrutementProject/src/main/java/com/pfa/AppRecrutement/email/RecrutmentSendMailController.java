package com.pfa.AppRecrutement.email;

import com.pfa.AppRecrutement.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecrutmentSendMailController {

    //send mail to user with his status
    @Autowired
    private NotificationService notificationService;

    @RequestMapping("/sendMailUser")
    public String signUpSucess(String status){
        try {
            notificationService.sendMessage(status);
        }catch (MailException e){
            return "Error : "+e.getMessage();
        }

        return "Mail sended...";
    }
}
