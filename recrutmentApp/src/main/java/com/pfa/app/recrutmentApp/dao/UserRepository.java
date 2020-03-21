package com.pfa.app.recrutmentApp.dao;

import com.pfa.app.recrutmentApp.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByName(String name);
    User findById(int id);

}
