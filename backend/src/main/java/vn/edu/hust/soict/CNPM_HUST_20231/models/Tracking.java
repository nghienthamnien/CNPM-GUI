package vn.edu.hust.soict.CNPM_HUST_20231.models;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data//thay tostring, getter setter
@Builder//
@Document("tracking")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class Tracking {
    @Id
    private String id;
    private String userId;
    private Float height;
    private Float weight;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date updatedAt;
}
