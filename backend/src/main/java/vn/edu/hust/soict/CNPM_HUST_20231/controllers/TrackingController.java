package vn.edu.hust.soict.CNPM_HUST_20231.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.TrackingRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.ResponseObject;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.TrackingResponse;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.TrackingRsp;
import vn.edu.hust.soict.CNPM_HUST_20231.services.TrackingService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/tracking")
@RequiredArgsConstructor
public class TrackingController {
    private final TrackingService trackingService;
    @PostMapping
    public ResponseEntity<ResponseObject> createTracking(
            @RequestBody TrackingRequest request,
            Authentication authentication){
        var result = trackingService.createTracking(request, authentication.getName());
        if(ObjectUtils.isEmpty(result)){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("Create tracking fail", null)
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Create tracking success", result)
        );
    }

    @GetMapping()
    public ResponseEntity<ResponseObject> getTracking(
            @RequestParam("limit") Integer limit,
            Authentication authentication){
        if(ObjectUtils.isEmpty(limit)){
            limit = 10;
        }
        var results = trackingService.getListTracking(authentication.getName(), limit);
        if(CollectionUtils.isEmpty(results)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Get list tracking not found", null)
            );
        }

        List<Date> dates = new ArrayList<>();
        List<Float> heights = new ArrayList<>();
        List<Float> weights = new ArrayList<>();
        for (var rs : results){
            dates.add(rs.getUpdatedAt());
            heights.add(rs.getHeight());
            weights.add(rs.getWeight());
        }
        TrackingResponse rsp = new TrackingResponse(dates, heights, weights);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Get list tracking successfully", rsp)
        );
    }
}
