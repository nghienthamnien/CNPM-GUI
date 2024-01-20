package vn.edu.hust.soict.CNPM_HUST_20231.services.impl;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.SurveyRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Survey;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.SurveyRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SurveyService {
    private final SurveyRepository surveyRepository;

    public boolean isExistSurvey(String username){
        var existSurvey = surveyRepository.findSurveyByUsername(username);
        return existSurvey.isPresent();
    }

    @SneakyThrows
    public Boolean createSurvey(SurveyRequest surveyRequest, String username){
        Survey survey = Survey.builder()
                .username(username)
                .sex(surveyRequest.getSex())
                .age(surveyRequest.getAge())
                .currentWeight(surveyRequest.getCurrentWeight())
                .heightByCm(surveyRequest.getHeightByCm())
                .goalWeight(surveyRequest.getGoalWeight())
                .build();
        surveyRepository.save(survey);
        return survey.getUsername() != null;
    }

    public Optional<Survey> getSurveyByUsername(String username){
        return surveyRepository.findSurveyByUsername(username);
    }

    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }
}
