package vn.edu.hust.soict.CNPM_HUST_20231.services;

import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateRatingDish;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Comment;

public interface CommentService {
    public Comment postComment(String dishId, CreateRatingDish request, String creatBy);
}
