package com.pfa.AppRecrutement.email;

import com.pfa.AppRecrutement.model.DBFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.xml.xpath.XPath;
import java.io.File;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MailControll {


    @Qualifier("getJavaMailSender")
    @Autowired
    public JavaMailSender emailSender;
    private DBFile file;
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

//        String path = "E:\\Manel.pdf";
  //      FileSystemResource file1 = new FileSystemResource(new File(path));
     //   attachmentBodyPart.attachFile(new File("path/to/file"));
        helper.addAttachment(file.getFileName(),new File("path/to/file"));


        emailSender.send(message);
        System.out.println("done...");
        return "Email Sent !";
    }

}
