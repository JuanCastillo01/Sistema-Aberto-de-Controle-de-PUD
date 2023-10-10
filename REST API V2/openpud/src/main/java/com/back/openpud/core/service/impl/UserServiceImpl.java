package com.back.openpud.core.service.impl;

import com.back.openpud.api.dto.CredentialsDto;
import com.back.openpud.api.dto.SignUpDto;
import com.back.openpud.api.dto.UserDto;
import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.entity.UserEntity;
import com.back.openpud.core.entity.enums.PermissionType;
import com.back.openpud.core.exception.AppException;
import com.back.openpud.api.dto.mapper.UserMapper;
import com.back.openpud.core.repository.UserRepository;
import com.back.openpud.core.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
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
            throw new AppException("Já foi criada esta conta com esse email", HttpStatus.BAD_REQUEST);
        }
        var user = userMapper.toEntity(userDto);

        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));

        if(!userRepository.existsByInstituicao(user.getInstituicao())){
            user.setPermissao(PermissionType.ADMINISTRADOR_DA_INSTITUICAO);
        } else {
            user.setPermissao(PermissionType.VISITANTE_DA_INSTITUICAO);
        }

        UserEntity savedUser = userRepository.save(user);


        return userMapper.toDto(savedUser);
    }

    @Override
    public Optional<UserEntity> findByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    @Override
    public void hardCodeAdmin() {
        var admin = UserEntity
                .builder()
                .login("admin@admin.admin")
                .email("admin@admin.admin")
                .permissao(PermissionType.ADMINISTRATOR_DO_SISTEMA)
                .build();
        var example = Example.of(admin);
        if(!userRepository.exists(example)){
            admin.setPassword(passwordEncoder.encode(CharBuffer.wrap("admin")));
            userRepository.save(admin);
        }
    }

    public UserDto findUserDtoByLogin(String login) {
        UserEntity user = userRepository.findByLogin(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toDto(user);
    }



}
