package vn.edu.hust.soict.CNPM_HUST_20231.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/test")
public class TestControllers {
    @GetMapping()
    public String test(Authentication authentication){
        return authentication.getName();
    }
}
