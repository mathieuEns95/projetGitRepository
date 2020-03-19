package com.pfa.app.recrutmentApp.services;

import com.pfa.app.recrutmentApp.models.Book;
import com.pfa.app.recrutmentApp.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> list() {
        return bookRepository.findAll();
    }
}