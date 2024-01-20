package vn.edu.hust.soict.CNPM_HUST_20231.dtos.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SurveyRequest {
    @NotNull
    private int sex;
    @NotNull
    private int age;
    @NotNull
    private float heightByCm;
    @NotNull
    private float currentWeight;
    @NotNull
    private float goalWeight;
}
