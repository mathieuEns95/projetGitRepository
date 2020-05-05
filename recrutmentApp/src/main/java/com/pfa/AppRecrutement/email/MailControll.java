package com.pfa.AppRecrutement.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MailControll {

    @Autowired
    public JavaMailSender emailSender;

    @ResponseBody
    @CrossOrigin(origins = "http://localhost:4200")

    @RequestMapping("/sendMailAttach")
    public String sendAttachmentEmail() throws MessagingException {

        MimeMessage message = emailSender.createMimeMessage();

        boolean multipart = true;

        MimeMessageHelper helper = new MimeMessageHelper(message, multipart);

        helper.setTo("manelbenrached11@gmail.com");
        helper.setSubject("Test email with attachments");

        helper.setText("Hello, Im testing email with attachments!");

        String path1 = "E:/manel.pdf";
        FileSystemResource file1 = new FileSystemResource(new File(path1));
        helper.addAttachment("PDF file", file1);


        emailSender.send(message);
        System.out.println("done...");
        return "Email Sent !";
    }

}
