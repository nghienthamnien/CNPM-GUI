package vn.edu.hust.soict.CNPM_HUST_20231.services;

import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateUserRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.LoginResponse;

public interface UserService {
    LoginResponse createAccount(CreateUserRequest createUserRequest);
    LoginResponse login(String username, String password);
}
