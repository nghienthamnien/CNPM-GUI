package vn.edu.hust.soict.CNPM_HUST_20231.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.edu.hust.soict.CNPM_HUST_20231.models.User;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Boolean existsByUsername(String username);
    Optional<User> findByUsername(String username);
}
