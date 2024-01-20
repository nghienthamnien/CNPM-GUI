package vn.edu.hust.soict.CNPM_HUST_20231.controllers;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.hust.soict.CNPM_HUST_20231.services.AIModelService;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class AIModelController {

    private final AIModelService myService;

    @Autowired
    public AIModelController(AIModelService myService) {
        this.myService = myService;
    }
    //lấy predict từ model
    @PostMapping("/make-prediction")
    public String makePrediction(@RequestBody String inputData) {
        return myService.callAiModel(inputData);
    }
}

