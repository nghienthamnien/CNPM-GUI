package vn.edu.hust.soict.CNPM_HUST_20231.services;

import org.springframework.stereotype.Service;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.request.TrackingRequest;
import vn.edu.hust.soict.CNPM_HUST_20231.models.Tracking;

import java.util.List;

public interface TrackingService {
    Tracking createTracking(TrackingRequest request, String userId);
    List<Tracking> getListTracking(String userId, int limit);
}
