package vn.edu.hust.soict.CNPM_HUST_20231;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class CnpmHust20231Application {

	public static void main(String[] args) {
		SpringApplication.run(CnpmHust20231Application.class, args);
	}

}
