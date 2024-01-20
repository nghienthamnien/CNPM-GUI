package vn.edu.hust.soict.CNPM_HUST_20231.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document("surveys")
public class Survey {
    private String username;
    private int sex;
    private int age;
    private float heightByCm;
    private float currentWeight;
    private float goalWeight;
}
