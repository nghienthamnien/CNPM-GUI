package vn.edu.hust.soict.CNPM_HUST_20231.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.hust.soict.CNPM_HUST_20231.models.FoodComposition;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.FoodCompositionRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.services.FoodCompositionService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodCompositionServiceImpl implements FoodCompositionService {
    private final FoodCompositionRepository foodCompositionRepository;
    @Override
    public List<FoodComposition> getAll() {
        return foodCompositionRepository.findAll();
    }
}
