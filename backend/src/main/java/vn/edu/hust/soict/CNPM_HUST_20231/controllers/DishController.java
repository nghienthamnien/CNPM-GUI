package vn.edu.hust.soict.CNPM_HUST_20231.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.hust.soict.CNPM_HUST_20231.constaints.Role;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateDishRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.UpdateStatusRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.ResponseObject;
import vn.edu.hust.soict.CNPM_HUST_20231.services.DishService;

@RestController
@RequestMapping("/api/v1/dish")
@RequiredArgsConstructor
public class DishController {
    private final DishService dishService;
    private final Long LIMIT_DEFAULT = 5L;
    private final Long OFFSET_DEFAULT = 0L;
    @PostMapping
    public ResponseEntity<ResponseObject> createDish(@RequestBody CreateDishRequest request,
                                                     Authentication authentication) {
        var role = authentication.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .findFirst();
        return role.map(s -> ResponseEntity.status(HttpStatus.CREATED).body(
                new ResponseObject("Create new dish successfully",
                        dishService.createDish(request, role.get(), authentication.getName()))
        )).orElseGet(() -> ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("Create new dish failed", null)
        ));

    }
    @GetMapping()
    public ResponseEntity<ResponseObject> getDishes(
            @RequestParam(required = false) Long limit,
            @RequestParam(required = false) Long offset,
            @RequestParam(required = false) String status
    ){
        if(offset == null) offset = OFFSET_DEFAULT;
        if(limit == null) limit = LIMIT_DEFAULT;
        var result = dishService.getDishes(limit, offset, status);
        if(CollectionUtils.isEmpty(result)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Get empty dish", null)
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Get list of dishes successfully",
                        result)
        );
    }
    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> getDishById(@PathVariable String id){
        var result = dishService.getDishById(id);
        if(result == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Get empty dish", null)
            );
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(String.format("Get dish with id: %s successfully", id)
                , result)
        );
    }
    @PutMapping("/{id}")
    public ResponseEntity<ResponseObject> updateStatus(
            @PathVariable String id,
            @RequestBody UpdateStatusRequest request,
            Authentication authentication
            ){
        var role = authentication.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .findFirst();
        if(role.isEmpty() || role.get().equals(Role.USER)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    new ResponseObject("User is not authorized", null)
            );
        }
        var result = dishService.updateDishStatus(id, request.getStatus());
        if(result == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new ResponseObject("Can not updated status", null));
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Updated status successfully", result)
        );
    }
}
