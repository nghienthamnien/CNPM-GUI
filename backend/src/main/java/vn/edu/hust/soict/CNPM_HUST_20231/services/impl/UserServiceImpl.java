package vn.edu.hust.soict.CNPM_HUST_20231.services.impl;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import vn.edu.hust.soict.CNPM_HUST_20231.components.JwtTokenUtil;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateUserRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.LoginResponse;
import vn.edu.hust.soict.CNPM_HUST_20231.exceptions.DataNotFoundException;
import vn.edu.hust.soict.CNPM_HUST_20231.constaints.Role;
import vn.edu.hust.soict.CNPM_HUST_20231.models.User;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.UserRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.services.UserService;
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    @Override
    @SneakyThrows
    public LoginResponse createAccount(CreateUserRequest createUserRequest) {
        User newUser = User.builder()
                .firstName(createUserRequest.getFirstName())
                .lastName(createUserRequest.getLastName())
                .username(createUserRequest.getUsername())
                .password(passwordEncoder.encode(createUserRequest.getPassword()))
                .role(Role.USER)
                .isActive(true)
                .build();
        userRepository.save(newUser);
        if(newUser.getId() != null){
            var username = newUser.getUsername();
            var password = newUser.getPassword();

//            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
//                    username, password
//            );
//            authenticationManager.authenticate(authenticationToken);
            var token = jwtTokenUtil.generateToken(newUser);
            return new LoginResponse(token, username, newUser.getFirstName(), newUser.getLastName());
        }
        return null;
    }

    @Override
    @SneakyThrows
    public LoginResponse login(String username, String password) {
        var existUser = userRepository.findByUsername(username);
        if(existUser.isEmpty()) {
            throw new DataNotFoundException("Invalid username or password");
        }
        //check password
        if(!passwordEncoder.matches(password, existUser.get().getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }
        //authenticate with Java Spring
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                username, password
        );
        authenticationManager.authenticate(authenticationToken);
        var token = jwtTokenUtil.generateToken(existUser.get());
        return ObjectUtils.isEmpty(token) ? null : new LoginResponse(token, username, existUser.get().getFirstName(), existUser.get().getLastName());
    }
}
