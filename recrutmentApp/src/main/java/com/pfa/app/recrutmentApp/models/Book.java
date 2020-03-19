package com.pfa.app.recrutmentApp.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="BOOK")
public class Book {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    //contructeur par defaut
    public Book() {
    }

    //les getter et setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
