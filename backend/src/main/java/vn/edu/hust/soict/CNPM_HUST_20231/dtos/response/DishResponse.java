package vn.edu.hust.soict.CNPM_HUST_20231.dtos.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;
import vn.edu.hust.soict.CNPM_HUST_20231.constaints.DishStatus;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Dish;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class DishResponse {
    private Dish dish;
    private List<IngredientsResponse> ingredients;

}
