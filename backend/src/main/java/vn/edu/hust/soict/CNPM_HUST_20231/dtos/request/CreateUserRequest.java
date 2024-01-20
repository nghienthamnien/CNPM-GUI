package vn.edu.hust.soict.CNPM_HUST_20231.dtos.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CreateUserRequest {
    @NotEmpty(message = "First name not null")
    private String firstName;
    @NotEmpty(message = "Last name not null")
    private String lastName;
    @NotEmpty(message = "Username not null")
    private String username;
    @NotEmpty(message = "Password not null")
    @Min(value = 6, message = "Password must be between 6 and 64 characters")
    private String password;
}
