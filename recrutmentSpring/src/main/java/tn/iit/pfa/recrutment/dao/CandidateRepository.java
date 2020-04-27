package tn.iit.pfa.recrutment.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import tn.iit.pfa.recrutment.model.Candidate;

@CrossOrigin("*")
@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    /*research elements by keywords
    @RestResource(path = "/bykeywords")
    public List<Candidate> findBykeywordsContains(@Param("mc") String des);
    //rechercher par pagination, page, size
    @RestResource(path = "/byKeywordsPage")
    public Page<Candidate> findByKeywordsContains(@Param("mc") String des, Pageable pageable); */


}
