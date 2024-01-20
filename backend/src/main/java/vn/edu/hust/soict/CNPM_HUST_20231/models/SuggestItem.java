package vn.edu.hust.soict.CNPM_HUST_20231.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotNull;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data//thay tostring, getter setter
@Builder//để tạo đối tượng
@Document("SuggestTable")
public class SuggestItem {
    @Id
    private String id;
    @NotNull
    private String username;
    @NotNull
    private List<String> topItem;

}
