package com.pfa.AppRecrutement.services;

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

    public void sendMessage(String status) throws MailException {
        //send email
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo("manelbenrached11@gmail.com");
        mail.setFrom("pfagroupe3@gmail.com");
        mail.setSubject("TEST MAIL CANDIDAT");
        mail.setText("LE STATUT DE VOTRE CANDIDATURE EST : "+status);

        javaMailSender.send(mail);
    }
}
