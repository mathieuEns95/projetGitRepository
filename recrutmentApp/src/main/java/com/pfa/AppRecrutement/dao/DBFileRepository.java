package com.pfa.AppRecrutement.dao;


 import com.pfa.AppRecrutement.model.DBFile;
 import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DBFileRepository extends JpaRepository<DBFile, String> {

}
