package tn.iit.pfa.recrutment.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import tn.iit.pfa.recrutment.model.HumanResource;

@CrossOrigin("*")
@Repository
public interface HumanResourceRepository extends JpaRepository<HumanResource, Long> {

}
