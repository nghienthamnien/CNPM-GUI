package vn.edu.hust.soict.CNPM_HUST_20231.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateRatingDish;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Comment;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.CommentRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.DishRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.services.CommentService;
import vn.edu.hust.soict.CNPM_HUST_20231.services.DishService;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final DishRepository dishRepository;
    @Override
    public Comment postComment(String dishId, CreateRatingDish request, String createBy) {
        var dish = dishRepository.findById(dishId).orElse(null);
        var comments = commentRepository.findAllByDishId(dishId);
        Float newRating = Float.valueOf(request.getRating());
        if(!CollectionUtils.isEmpty(comments)){
            var totalRating = (float) comments.stream().mapToInt(Comment::getRating).sum();
            totalRating += newRating;
            newRating = (float) totalRating / (comments.size() + 1);
        }
        var comment = Comment.builder()
                .comment(request.getComment())
                .dishId(dishId)
                .rating(request.getRating())
                .createBy(createBy)
                .build();
        dish.setRating(newRating);
        dishRepository.save(dish);
        commentRepository.save(comment);
        return comment;
    }
}
