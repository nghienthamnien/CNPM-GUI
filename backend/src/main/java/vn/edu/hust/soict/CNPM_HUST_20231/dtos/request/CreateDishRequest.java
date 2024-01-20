package vn.edu.hust.soict.CNPM_HUST_20231.dtos.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.edu.hust.soict.CNPM_HUST_20231.constaints.DishStatus;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CreateDishRequest {
    private String title;
    private String description;
    private String imgUrl;
    private Long time;
    private List<IngredientsRequest> ingredients;
    private List<String> instructions;
}
