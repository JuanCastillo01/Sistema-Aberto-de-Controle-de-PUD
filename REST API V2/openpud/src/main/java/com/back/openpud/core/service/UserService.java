package com.back.openpud.core.service;

import com.back.openpud.api.dto.CredentialsDto;
import com.back.openpud.api.dto.SignUpDto;
import com.back.openpud.api.dto.UserDto;
import com.back.openpud.core.entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {
    UserDto findUserDtoByLogin(String subject);

    UserDto login(CredentialsDto credentialsDto);

    UserDto register(SignUpDto user);

    Optional<UserEntity> findByLogin(String login);
}
