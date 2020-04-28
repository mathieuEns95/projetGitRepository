package com.pfa.AppRecrutement.dao;

import com.pfa.AppRecrutement.Util.HibernateUtil;
import com.pfa.AppRecrutement.model.User;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.mapping.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
     Boolean existsByEmail(String email);

    }
