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
@Document("dishes")
public class RssData {

    private String title;
    private String link;
    private String description;
    private String imgSource;
}
