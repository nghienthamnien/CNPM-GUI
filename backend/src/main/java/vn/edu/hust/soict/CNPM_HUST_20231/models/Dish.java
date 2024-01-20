package vn.edu.hust.soict.CNPM_HUST_20231.models;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import vn.edu.hust.soict.CNPM_HUST_20231.constaints.DishStatus;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document("dishes")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class Dish {
    @Id
    private String id;
    @Field(name = "id")
    private Integer dishId;
    private String title;
    private String description;
    @Field(name="img_url")
    private String imgUrl;
    private List<String> instructions;
    private DishStatus status;
    private Long time;
    private Float rating;
    private String slug;
    private String createdBy;
}
