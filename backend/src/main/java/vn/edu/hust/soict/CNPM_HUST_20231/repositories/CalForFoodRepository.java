package vn.edu.hust.soict.CNPM_HUST_20231.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.models.CalForFood;

import java.util.List;

public interface CalForFoodRepository extends MongoRepository<CalForFood, String> {
    List<CalForFood> findAllByFoodId(String foodId);
    List<CalForFood> findAllByFoodnameId(Integer foodNameId);
}
