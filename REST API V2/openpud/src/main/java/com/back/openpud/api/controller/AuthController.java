package com.back.openpud.api.controller;

import com.back.openpud.api.dto.CredentialsDto;
import com.back.openpud.api.dto.SignUpDto;
import com.back.openpud.api.dto.UserDto;
import com.back.openpud.api.dto.mapper.UserMapper;
import com.back.openpud.api.dto.request.RefreshTokenRequestDTO;
import com.back.openpud.api.dto.response.JwtResponse;
import com.back.openpud.api.dto.response.UserResponseDTO;
import com.back.openpud.core.config.UserAuthenticationProvider;
import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.entity.RefreshTokenEntity;
import com.back.openpud.core.service.InstituicaoService;
import com.back.openpud.core.service.RefreshTokenService;
import com.back.openpud.core.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final InstituicaoService service;
    private final UserService userService;
    private final RefreshTokenService refreshTokenService;
    private final UserAuthenticationProvider userAuthenticationProvider;
    private final UserMapper userMapper;

    @PostMapping("/auth/login")
    public ResponseEntity<UserResponseDTO> login(@RequestBody CredentialsDto credentialsDto) {
        UserDto userDto = userService.login(credentialsDto);
        var token = refreshTokenService.findRefreshTokenByUserLogin(userDto.getLogin());
        if(token.isEmpty()){
            var teste  = refreshTokenService.createRefreshToken(userDto.getLogin());
            token = Optional.of(teste);
        }
        userDto.setToken(JwtResponse
                .builder()
                .accessToken(userAuthenticationProvider.createToken(userDto.getLogin()))
                .token(token.get().getToken())
                .build());
        return ResponseEntity.ok(userMapper.toRespnseDto(userDto));
    }

    @PostMapping("/auth/register")
    public ResponseEntity<UserResponseDTO> register(@RequestBody SignUpDto user) {
        UserDto createdUser = userService.register(user);
        var token = refreshTokenService.createRefreshToken(createdUser.getLogin());
        createdUser.setToken(JwtResponse
                .builder()
                .accessToken(userAuthenticationProvider.createToken(createdUser.getLogin()))
                .token(token.getToken())
                .build());
        return ResponseEntity.created(URI.create("/users/" + createdUser.getId())).body(userMapper.toRespnseDto(createdUser));
    }
    @PostMapping("/auth/refreshToken")
    public JwtResponse refreshToken(@RequestBody RefreshTokenRequestDTO tokenRequest){
        return refreshTokenService.recuperarToken(tokenRequest.getToken())
                .map(refreshTokenService::ValidateToken)
                .map(RefreshTokenEntity::getUserInfo)
                .map(user -> {
                    String accessToken = userAuthenticationProvider.createToken(user.getLogin());
                    return JwtResponse
                            .builder()
                            .accessToken(accessToken)
                            .token(tokenRequest.getToken())
                            .build();
                } )
                .orElseThrow(()-> new RuntimeException("Usuario não encontrado no repositorio de tokens"));
    }
    @GetMapping("/auth/instituicoes")
    public Page<InstituicaoEntity> listarInstituicoes(){
        service.hardcodeInt();
        userService.hardCodeAdmin();
        return service.listarTodasInstituicoes();
    }
}
