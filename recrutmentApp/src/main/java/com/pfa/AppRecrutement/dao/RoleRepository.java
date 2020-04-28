package com.pfa.AppRecrutement.dao;

import com.pfa.AppRecrutement.Util.HibernateUtil;
import com.pfa.AppRecrutement.controller.UserRestAPI;
import com.pfa.AppRecrutement.model.Role;
import com.pfa.AppRecrutement.model.RoleName;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.sql.Insert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface
RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(RoleName roleName);

         // commit transaction
     }

