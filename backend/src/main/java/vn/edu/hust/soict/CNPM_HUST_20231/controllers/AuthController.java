package vn.edu.hust.soict.CNPM_HUST_20231.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateUserRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.LoginRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.ResponseObject;
import vn.edu.hust.soict.CNPM_HUST_20231.services.UserService;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final UserService userService;
    @PostMapping("/signup")
    public ResponseEntity<ResponseObject> createAccount(
            @Valid @RequestBody CreateUserRequest request,
            BindingResult bindingResult
    ){
        try {
        if (bindingResult.hasErrors()) {
            List<String> errorMessages = bindingResult.getFieldErrors()
                    .stream()
                    .map(FieldError::getDefaultMessage)
                    .toList();

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("Request not valid", errorMessages)
            );
        }
            var data = userService.createAccount(request);
            return !ObjectUtils.isEmpty(data) ?
                    ResponseEntity.status(HttpStatus.CREATED).body(
                            new ResponseObject("Create account successfully", data)
                    ) :
                    ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                            new ResponseObject("Create account failed", null)
                    );
        }
        catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("Create account failed", null)
            );
        }
    }
    @PostMapping("/login")
    public ResponseEntity<ResponseObject> login(
            @Valid @RequestBody LoginRequest request,
            BindingResult bindingResult
    ){

    try{
    var rsp = userService.login(request.getUsername(), request.getPassword());
    if(ObjectUtils.isEmpty(rsp)) return ResponseEntity.badRequest().body(
            new ResponseObject("Login fail", null)
    );
    return ResponseEntity.status(HttpStatus.OK).body(
            new ResponseObject("Login successfully", rsp)
    );
    } catch (Exception e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject(e.getMessage(), null)
        );
    }
    }
}
