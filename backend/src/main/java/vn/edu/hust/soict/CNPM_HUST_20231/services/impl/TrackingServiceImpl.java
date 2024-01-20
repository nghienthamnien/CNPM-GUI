package vn.edu.hust.soict.CNPM_HUST_20231.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.TrackingRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Tracking;
import vn.edu.hust.soict.CNPM_HUST_20231.repositories.TrackingRepository;
import vn.edu.hust.soict.CNPM_HUST_20231.services.TrackingService;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TrackingServiceImpl implements TrackingService {
    private final TrackingRepository trackingRepository;
    @Override
    public Tracking createTracking(TrackingRequest request, String userId) {
        Tracking newTracking = Tracking.builder()
                .height(request.getHeight())
                .weight(request.getWeight())
                .userId(userId)
                .createdAt(new Date())
                .updatedAt(new Date())
                .build();
        trackingRepository.save(newTracking);
        return newTracking;
    }


    @Override
    public List<Tracking> getListTracking(String userId, int limit) {
        Pageable pageable = PageRequest.of(0, limit);
        return trackingRepository.findByUserIdOrderByUpdatedAtDesc(userId, pageable);
    }
}
