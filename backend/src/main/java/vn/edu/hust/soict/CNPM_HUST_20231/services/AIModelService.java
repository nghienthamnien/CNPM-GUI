package vn.edu.hust.soict.CNPM_HUST_20231.services;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@Service
public class AIModelService {

    private final String apiUrl = "http://localhost:5000/predict";  // Đặt URL API của bạn ở đây

    private final RestTemplate restTemplate;

    public AIModelService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String callAiModel(String inputData) {
        // Gửi request POST đến API của Python
        ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, inputData, String.class);

        // Xử lý kết quả từ response
        return response.getBody();
    }
}