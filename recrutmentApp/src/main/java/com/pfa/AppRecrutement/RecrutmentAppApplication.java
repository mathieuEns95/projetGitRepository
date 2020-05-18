package com.pfa.AppRecrutement;

import com.pfa.AppRecrutement.dao.UserRepository;
import com.pfa.AppRecrutement.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import javax.annotation.Resource;

@SpringBootApplication
public class RecrutmentAppApplication {


    public static void main(String[] args) {
        SpringApplication.run(RecrutmentAppApplication.class, args);
    }

}






