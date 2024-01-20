package vn.edu.hust.soict.CNPM_HUST_20231.services;

import org.springframework.stereotype.Service;
import vn.edu.hust.soict.CNPM_HUST_20231.constaints.Role;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateDishRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.DishResponse;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Dish;

import java.util.List;

public interface DishService {
    DishResponse createDish(CreateDishRequest request, String role, String username);
    List<Dish> getDishes(Long limit, Long offset, String status);
    DishResponse getDishById(String id);
    Dish updateDishStatus(String id, String status);
}
