package vn.edu.hust.soict.CNPM_HUST_20231.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Comment;

import java.util.List;

public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findAllByDishId(String dishId);
}
