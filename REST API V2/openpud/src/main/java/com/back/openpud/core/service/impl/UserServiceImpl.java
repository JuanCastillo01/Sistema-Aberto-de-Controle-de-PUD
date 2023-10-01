package com.back.openpud.core.service.impl;

import com.back.openpud.api.dto.CredentialsDto;
import com.back.openpud.api.dto.SignUpDto;
import com.back.openpud.api.dto.UserDto;
import com.back.openpud.core.entity.UserEntity;
import com.back.openpud.core.exception.AppException;
import com.back.openpud.core.mapper.UserMapper;
import com.back.openpud.core.repository.UserRepository;
import com.back.openpud.core.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserMapper userMapper;

    public UserDto login(CredentialsDto credentialsDto) {
        UserEntity user = userRepository.findByLogin(credentialsDto.getLogin())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), user.getPassword())) {
            return userMapper.toDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto userDto) {
        Optional<UserEntity> optionalUser = userRepository.findByLogin(userDto.getLogin());

        if (optionalUser.isPresent()) {
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        UserEntity user = UserEntity
                .builder()
                .nomeUsuario(userDto.getNomeUsuario())
                .email(userDto.getEmail())
                .login(userDto.getLogin())
                .build();
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));

        UserEntity savedUser = userRepository.save(user);

        return userMapper.toDto(savedUser);
    }

    @Override
    public Optional<UserEntity> findByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    public UserDto findUserDtoByLogin(String login) {
        UserEntity user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toDto(user);
    }



}
