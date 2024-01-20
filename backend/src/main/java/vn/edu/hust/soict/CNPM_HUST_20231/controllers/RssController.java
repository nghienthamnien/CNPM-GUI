package vn.edu.hust.soict.CNPM_HUST_20231.controllers;

import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.hust.soict.CNPM_HUST_20231.dtos.response.ResponseObject;
import vn.edu.hust.soict.CNPM_HUST_20231.models.RssData;

import java.net.URL;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class RssController {

    @GetMapping("/rss/health")
    ResponseEntity<ResponseObject> getRssListData() {
        String rssFeedUrl = "https://vnexpress.net/rss/suc-khoe.rss";

        try {
            // Fetch and parse RSS feed
            SyndFeed feed = parseRssFeed(rssFeedUrl);
            List<RssData> dataList = new ArrayList<RssData>();
            List<SyndEntry> entries = feed.getEntries();
            var max = Math.min(entries.size(), 4);
            // Create an instance of Random
            Random random = new Random();

            // Select 4 random entries
            Set<Integer> selectedIndices = new HashSet<>();
            while (selectedIndices.size() < max) {
                int randomIndex = random.nextInt(entries.size());
                selectedIndices.add(randomIndex);
            }

            // Iterate over the selected indices and build RssData
            for (Integer selectedIndex : selectedIndices) {
                SyndEntry entry = entries.get(selectedIndex);
                System.out.println("Description: " + entry.getDescription().getValue());

                var rss = RssData.builder()
                        .link(entry.getLink())
                        .title(entry.getTitle())
                        .imgSource(getImgSource(entry.getDescription().getValue()))
                        .description(extractLastInfo(entry.getDescription().getValue()))
                        .build();
                dataList.add(rss);
            }



            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("get rss successfully", dataList)
            );
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    new ResponseObject("data not found", null)
            );
        }
    }

    private static SyndFeed parseRssFeed(String url) throws Exception {
        URL feedUrl = new URL(url);
        SyndFeedInput input = new SyndFeedInput();
        return input.build(new XmlReader(feedUrl));
    }

    private static String extractLastInfo(String htmlString) {
        // Define a regex pattern to match content after <br>
        Pattern pattern = Pattern.compile("</br>(.*)");

        // Create a matcher with the input HTML string
        Matcher matcher = pattern.matcher(htmlString);

        // Find the last match
        if (matcher.find()) {
            return matcher.group(1).trim();
        }

        return "";
    }

    private static String getImgSource(String htmlString) {
        // Define a regex pattern to match content after <br>
        Pattern pattern = Pattern.compile("<img\\s+src=\"(.*?)\"");

        // Create a matcher with the input CDATA content
        Matcher matcher = pattern.matcher(htmlString);

        // Find the match
        if (matcher.find()) return matcher.group(1);
        return "";
    }
}
