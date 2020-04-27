package tn.iit.pfa.recrutment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.iit.pfa.recrutment.dao.HumanResourceRepository;
import tn.iit.pfa.recrutment.model.HumanResource;

import java.util.List;

@CrossOrigin("*")
@RestController
public class HumanResourceRestService {
    @Autowired
    private HumanResourceRepository humanResourceRepository;

    @GetMapping(value="/listHR")
    public List<HumanResource> listHR(){
        return humanResourceRepository.findAll();
    }

    @GetMapping(value="/listHR/{id}")
    public HumanResource listHR(@PathVariable(name="id") Long id){
        return humanResourceRepository.findById(id).get();
    }

    //modify HR data
    @PutMapping(value="/listHR/{id}")
    public HumanResource update(@PathVariable (name="id") Long id, @RequestBody HumanResource hr){
        hr.setId(id);
        return humanResourceRepository.save(hr);
    }

    @PostMapping (value="/listHR/")
    public HumanResource save(@RequestBody HumanResource hr){
        return humanResourceRepository.save(hr);
    }

    @DeleteMapping (value="/listHR/{id}")
    public void delete(@PathVariable (name="id") Long id){ humanResourceRepository.deleteById(id);
    }

}
