package vn.edu.hust.soict.CNPM_HUST_20231.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.FCRsp;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.ResponseObject;
import vn.edu.hust.soict.CNPM_HUST_20231.services.FoodCompositionService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/food_composition")
@RequiredArgsConstructor
public class FoodCompositionController {
    private final FoodCompositionService foodCompositionService;
    @GetMapping
    ResponseEntity<ResponseObject> getAll(){
        var result = foodCompositionService.getAll();
        if(CollectionUtils.isEmpty(result))
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Get all food composition failed", null)
            );

        var rsp = result
                .stream()
                .map(r -> new FCRsp(r.getId(),r.getFoodId(), r.getFoodName()))
                .collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Get all food composition successfully", rsp)
        );

    }
}
