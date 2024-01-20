package vn.edu.hust.soict.CNPM_HUST_20231.repositories;

import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Tracking;


import java.util.List;

@Repository
public interface TrackingRepository extends MongoRepository<Tracking, String> {
    List<Tracking> findByUserIdOrderByUpdatedAtDesc(String userId, Pageable pageable);
}
