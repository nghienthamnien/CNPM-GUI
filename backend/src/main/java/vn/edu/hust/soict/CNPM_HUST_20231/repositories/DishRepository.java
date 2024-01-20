package vn.edu.hust.soict.CNPM_HUST_20231.repositories;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Dish;

import java.util.List;

@Repository
public interface DishRepository extends MongoRepository<Dish, String> {
    @Aggregation(pipeline = {
            "{'$sort': {'id' :  1}}",
            "{'$skip':  ?1}",
            "{'$limit': ?0}",
            "{$match: { $or: [ { status: '?2' }, { $expr: { $eq: [ '?2', null ] } } ] }}"
    })
    List<Dish> getDishWithLimitAndOffset(Long limit, Long offset, String status);
}
