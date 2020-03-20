package com.pfa.app.recrutmentApp.services;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private JavaMailSender javaMailSender;
    @Autowired
    public NotificationService(JavaMailSender javaMailSender){

        this.javaMailSender = javaMailSender;
    }

    public void sendMessage() throws MailException {
        //send email
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo("mathieu.ntono2@gmail.com");
        mail.setFrom("pfagroupe3@gmail.com");
        mail.setSubject("TEST MAIL CANDIDAT");
        mail.setText("LE STATUT DE VOTRE CANDIDATURE EST : CV CLASSIFICATION");

        javaMailSender.send(mail);
    }
}
