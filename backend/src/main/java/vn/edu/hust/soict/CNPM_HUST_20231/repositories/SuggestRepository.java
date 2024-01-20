package vn.edu.hust.soict.CNPM_HUST_20231.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.edu.hust.soict.CNPM_HUST_20231.models.SuggestItem;
import vn.edu.hust.soict.CNPM_HUST_20231.models.User;

import java.util.Optional;


@Repository
public interface SuggestRepository extends MongoRepository<SuggestItem, String> {
    Optional<SuggestItem> findByUsername(String username);
}
