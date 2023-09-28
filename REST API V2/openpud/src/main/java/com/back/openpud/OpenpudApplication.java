package com.back.openpud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class OpenpudApplication {

    public static void main(String[] args) {
        SpringApplication.run(OpenpudApplication.class, args);
    }

}
