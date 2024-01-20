package vn.edu.hust.soict.CNPM_HUST_20231.dtos.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import vn.edu.hust.soict.CNPM_HUST_20231.models.CalForFood;
import vn.edu.hust.soict.CNPM_HUST_20231.models.FoodComposition;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class IngredientsResponse {
  private FoodComposition foodComposition;
  private CalForFood calForFood;
}
