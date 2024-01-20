package vn.edu.hust.soict.CNPM_HUST_20231.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.edu.hust.soict.CNPM_HUST_20231.models.FoodComposition;

import java.util.List;

@Repository
public interface FoodCompositionRepository extends MongoRepository<FoodComposition, String> {
    List<FoodComposition> findAllByFoodIdIn(List<Integer> foodIds);

}
