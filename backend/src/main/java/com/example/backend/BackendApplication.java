package com.example.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.backend.user.AppUser;
import com.example.backend.user.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    // create a default user
    @Bean
    CommandLineRunner init(UserRepository userRepository) {
        return args -> {
            if (userRepository.findByUsername("user").isEmpty()) {
                AppUser u = new AppUser();
                u.setUsername("user");
                u.setPassword(new BCryptPasswordEncoder().encode("password"));
                userRepository.save(u);
            }
        };
    }
}
