package vn.edu.hust.soict.CNPM_HUST_20231.controllers.SurveyController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.SurveyRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.ResponseObject;
import vn.edu.hust.soict.CNPM_HUST_20231.models.AllSurveyQuestion;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Survey;
import vn.edu.hust.soict.CNPM_HUST_20231.services.impl.SurveyService;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class SurveyController {
    private final SurveyService surveyService;

    @PostMapping("/surveys")
    public ResponseEntity<ResponseObject> createSurveyData(
            @Valid @RequestBody SurveyRequest surveyRequest, BindingResult bindingResult,
            Authentication authentication
    )
    {
        try {
            if (bindingResult.hasErrors()) {
                List<String> errorMessages = bindingResult.getFieldErrors()
                        .stream()
                        .map(FieldError::getDefaultMessage)
                        .toList();

                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                        new ResponseObject("Request not valid", errorMessages)
                );
            }
            var username = authentication.getName();
            if(surveyService.createSurvey(surveyRequest, username)){
                return ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject("create surveyRequest successfully", null)
                );
            }
            return ResponseEntity.badRequest().body(
                    new ResponseObject("create survey failed", null)
            );
        }
        catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("Create survey failed", null)
            );
        }
    }

    @GetMapping("/surveys")
    ResponseEntity<ResponseObject> getSurveyByID(Authentication authentication){
       var username = authentication.getName();
        var survey = surveyService.getSurveyByUsername(username);
        if(survey.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("get survey successfully", survey)
            );
        }
        return ResponseEntity.badRequest().body(
                new ResponseObject("survey of this username account is not exist", null)
        );
    }

    @GetMapping("/surveys/all")
    List<Survey> getAllSurveys(){
        return surveyService.getAllSurveys();
    }

    @GetMapping("/survey_questions")
    AllSurveyQuestion GetSurveyQuestion(){
        return new AllSurveyQuestion();
    }

}
