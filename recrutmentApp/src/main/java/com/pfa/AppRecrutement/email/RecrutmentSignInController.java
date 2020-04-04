package com.pfa.AppRecrutement.email;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecrutmentSignInController {

    //check admin connection
    @RequestMapping(value =  "/checkSignInAdmin", method = RequestMethod.GET)
    public boolean connectAdmin(String username, String password){
        if (username.equals("admin") && password.equals("root")){
            return true;
        }else {

            return false;
        }
    }

    //check user connection
    @RequestMapping(value =  "/checkSignInUsers", method = RequestMethod.GET)
    public boolean connectUser(String username, String password){
        if (username.equals("user") && password.equals("user")){
            return true;
        }else {

            return false;
        }
    }


}
