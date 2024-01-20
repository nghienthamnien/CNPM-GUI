package vn.edu.hust.soict.CNPM_HUST_20231.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document("cal_for_food")
public class CalForFood {
    @Id
    private String id;
    @Field("amout")
    private Integer amount;
    private Boolean main;
    private String compositionId;
    private String foodId;
    private Integer composition_id;
    @Field(name = "foodname_id")
    private Integer foodnameId;
    private String unit;
}
