package vn.edu.hust.soict.CNPM_HUST_20231.repositories;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Survey;

import java.util.Optional;

@Repository
public interface SurveyRepository extends MongoRepository<Survey, String> {
    Optional<Survey> findSurveyByUsername(String username);
}

