package vn.edu.hust.soict.CNPM_HUST_20231.controllers;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.ResponseObject;
import vn.edu.hust.soict.CNPM_HUST_20231.models.SuggestItem;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.SuggestRepository;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class SuggestController {
    private final SuggestRepository repository;
    @GetMapping("/suggest/{username}")
    ResponseEntity<ResponseObject> getSuggestItem(@PathVariable String username)
    {
        try {
            Optional<SuggestItem> topItem = repository.findByUsername(username);
            if(!topItem.isPresent())
            {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                        new ResponseObject("This user hasn't suggest", username)
                );
            }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Query product successfully",topItem)
            );
        }
        catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("Not success", null)
            );
        }
    }
}
