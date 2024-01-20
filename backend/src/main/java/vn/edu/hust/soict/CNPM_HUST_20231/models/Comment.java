package vn.edu.hust.soict.CNPM_HUST_20231.models;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document("comments")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class Comment {
    @Id
    private String id;
    private String comment;
    private Integer rating;
    private String dishId;
    private String createBy;
}
