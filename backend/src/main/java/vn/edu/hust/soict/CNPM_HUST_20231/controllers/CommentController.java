package vn.edu.hust.soict.CNPM_HUST_20231.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateDishRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateRatingDish;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.ResponseObject;
import vn.edu.hust.soict.CNPM_HUST_20231.services.CommentService;

@RestController
@RequestMapping("/api/v1/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;
    @PostMapping("/{dish_id}")
    public ResponseEntity<ResponseObject> postComment(
            @PathVariable("dish_id") String dishId,
            @RequestBody CreateRatingDish request,
            Authentication authentication
            ){
        var result = commentService.postComment(dishId, request, authentication.getName());
        return ResponseEntity.ok(new ResponseObject("Post comment success", result));
    }
}
