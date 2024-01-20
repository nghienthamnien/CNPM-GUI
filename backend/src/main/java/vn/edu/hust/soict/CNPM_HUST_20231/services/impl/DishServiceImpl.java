package vn.edu.hust.soict.CNPM_HUST_20231.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;
import vn.edu.hust.soict.CNPM_HUST_20231.constaints.DishStatus;
import vn.edu.hust.soict.CNPM_HUST_20231.constaints.Role;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.CreateDishRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.DishResponse;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.IngredientsResponse;
import vn.edu.hust.soict.CNPM_HUST_20231.models.CalForFood;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Dish;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.CalForFoodRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.DishRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.FoodCompositionRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.services.DishService;

import java.text.Normalizer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DishServiceImpl implements DishService {
    private final DishRepository dishRepository;
    private final MongoTemplate mongoTemplate;
    private final FoodCompositionRepository foodCompositionRepository;
    private final CalForFoodRepository calForFoodRepository;
    @Override
    public DishResponse createDish(CreateDishRequest request, String role, String username) {
        var status = (role.equals(Role.ADMIN.name()) || role.equals(Role.MOD.name())) ?
                DishStatus.CONFIRMED : DishStatus.UNCONFIRMED;
        var newDish = Dish.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .imgUrl(request.getImgUrl())
                .time(request.getTime())
                .instructions(request.getInstructions())
                .status(status)
                .createdBy(username)
                .build();
        dishRepository.save(newDish);
        var ingredients = request.getIngredients();
        var fcIDs = new ArrayList<String>();
        var listCalForFood = ingredients.stream().map(
                ig -> {
                    var cal = ig.getCalForFood();
                    fcIDs.add(ig.getCompositionId());
                     return CalForFood.builder()
                             .foodId(newDish.getId())
                             .compositionId(ig.getCompositionId())
                             .amount(cal.getAmount())
                             .main(cal.getMain())
                             .unit(cal.getUnit())
                             .build();
                }
        ).toList();
        calForFoodRepository.saveAll(listCalForFood);
        Map<String, CalForFood> mapCalForFood = new HashMap<>();
        for (var cFF : listCalForFood){
            mapCalForFood.put(cFF.getCompositionId(), cFF);
        }
        var foodComposition = foodCompositionRepository.findAllById(fcIDs);
        var igRsp = foodComposition.stream()
                .map(fc -> {
                    return new IngredientsResponse(fc, mapCalForFood.get(fc.getId()));
                }).toList();
        return new DishResponse(newDish, igRsp);
    }

    @Override
    public List<Dish> getDishes(Long limit, Long offset, String status) {
        List<AggregationOperation> operations = new ArrayList<>();
        operations.add(Aggregation.sort(Sort.by("id").ascending()));
        operations.add(Aggregation.skip(offset.intValue()));
        operations.add(Aggregation.limit(limit.intValue()));
        if(status != null){
            operations.add(Aggregation.match(Criteria.where("status").is(status)));
        }
        Aggregation aggregation
                = Aggregation.newAggregation(operations);
        var results =  mongoTemplate.aggregate(aggregation, "dishes", Dish.class).getMappedResults();

        return results.stream()
                .peek(result -> {
                    String slug = createSlug(result.getId(), result.getTitle());
                    result.setSlug(slug);
                })
                .collect(Collectors.toList());
    }

    @Override
    public DishResponse getDishById(String id) {
        var dish = dishRepository.findById(id)
                .map(dishes -> {
                    String slug = createSlug(dishes.getId(), dishes.getTitle());
                    dishes.setSlug(slug);
                    return dishes;
                })
                .orElse(null);
        if(dish.getDishId() != null) {
            var cal = calForFoodRepository.findAllByFoodnameId(dish.getDishId());
            var fcIds = cal.stream().map(CalForFood::getComposition_id).toList();
            var foodComposition = foodCompositionRepository.findAllByFoodIdIn(fcIds);
            Map<Integer, CalForFood> mapCalForFood = new HashMap<>();
            for (var cFF : cal){
                mapCalForFood.put(cFF.getComposition_id(), cFF);
            }
            var igRsp = foodComposition.stream()
                    .map(fc -> {
                        return new IngredientsResponse(fc, mapCalForFood.get(fc.getFoodId()));
                    }).toList();
            return new DishResponse(dish, igRsp);
        }
        var cal = calForFoodRepository.findAllByFoodId(dish.getId());
        var fcIds = cal.stream().map(CalForFood::getCompositionId).toList();
        var foodComposition = foodCompositionRepository.findAllById(fcIds);
        Map<String, CalForFood> mapCalForFood = new HashMap<>();
        for (var cFF : cal){
            mapCalForFood.put(cFF.getCompositionId(), cFF);
        }
        var igRsp = foodComposition.stream()
                .map(fc -> {
                    return new IngredientsResponse(fc, mapCalForFood.get(fc.getId()));
                }).toList();
        return new DishResponse(dish, igRsp);
    }


    @Override
    public Dish updateDishStatus(String id, String status) {
        var dish = dishRepository.findById(id);
        if(dish.isPresent()){
            var updateDish = dish.get();
            try {
                DishStatus updateDishStatus = DishStatus.valueOf(status);
                updateDish.setStatus(updateDishStatus);
                return dishRepository.save(updateDish);
            } catch (IllegalArgumentException e) {
                return null;
            }
        }
        return null;
    }
    private String createSlug(String idString, String name) {
        // Combine ID and name
        String combinedString = idString + "-" + name;

        // Remove accents and normalize to decomposed form
        String normalizedString = Normalizer.normalize(combinedString, Normalizer.Form.NFD)
                .replaceAll("\\p{InCombiningDiacriticalMarks}+", "");

        // Replace non-alphanumeric characters with "-"
        String slug = normalizedString.replaceAll("[^a-zA-Z0-9\\s-]", "").replaceAll("\\s+", "-");

        return slug.toLowerCase(); // Convert to lowercase for consistency
    }

}
