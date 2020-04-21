package com.pfa.AppRecrutement.dao;

import com.pfa.AppRecrutement.model.Role;
import com.pfa.AppRecrutement.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface
RoleRepository extends JpaRepository<Role, Long> {
     Optional<Role> findByName(RoleName roleName);
}
