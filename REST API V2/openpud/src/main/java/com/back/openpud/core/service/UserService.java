package com.back.openpud.core.service;

import com.back.openpud.api.dto.CredentialsDto;
import com.back.openpud.api.dto.SignUpDto;
import com.back.openpud.api.dto.UserDto;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserDto findByLogin(String subject);

    UserDto login(CredentialsDto credentialsDto);

    UserDto register(SignUpDto user);
}
