package tn.iit.pfa.recrutment.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.iit.pfa.recrutment.dao.CandidateRepository;
import tn.iit.pfa.recrutment.model.Candidate;

import java.util.List;

@CrossOrigin("*")
@RestController
public class CandidateRestService {
    @Autowired
    private CandidateRepository candidateRepository;

    @GetMapping(value="/listCandidates")
    public List<Candidate> listCandidates(){
        return candidateRepository.findAll();
    }

    @GetMapping(value="/listCandidates/{id}")
    public Candidate listCandidates(@PathVariable(name="id") Long id){
        return candidateRepository.findById(id).get();
    }
    //modify candidate's data
    @PutMapping(value="/listCandidates/{id}")
    public Candidate update(@PathVariable (name="id") Long id, @RequestBody Candidate candidate){
        candidate.setId(id);
        return candidateRepository.save(candidate);
    }

    @PostMapping (value="/listCandidates/")
    public Candidate save(@RequestBody Candidate candidate){
        return candidateRepository.save(candidate);
    }

    @DeleteMapping (value="/listCandidates/{id}")
    public void delete(@PathVariable (name="id") Long id){ candidateRepository.deleteById(id);
    }


}
