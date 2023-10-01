package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.RefreshTokenEntity;
import com.back.openpud.core.entity.UserEntity;
import com.back.openpud.core.repository.RefreshTokenRepository;
import com.back.openpud.core.service.RefreshTokenService;
import com.back.openpud.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Service
public class RefreshTokenServiceImpl implements RefreshTokenService {
    @Autowired
    private RefreshTokenRepository repositorio;
    @Autowired
    private UserService userService;

    public RefreshTokenEntity ValidateToken(RefreshTokenEntity token) {
        if (token.getExperityDate().compareTo(Instant.now()) < 0) {
            repositorio.delete(token);
            throw new RuntimeException(token.getToken() + " Refresh token was expired. Please make a new signin request");
        }
        return token;
    }

    public RefreshTokenEntity createRefreshToken(String login) {

        RefreshTokenEntity refreshToken = RefreshTokenEntity
                .builder()
                .userInfo(userService.findByLogin(login).get())
                .token(UUID.randomUUID().toString())
                .experityDate(Instant.now().plusMillis(600000))
                .build();
        return repositorio.save(refreshToken);
    }

    public Optional<RefreshTokenEntity> recuperarToken(String token) {
        return repositorio.findByToken(token);
    }

    public Optional<RefreshTokenEntity> findRefreshTokenByUserLogin(String login){
        return repositorio.findByUserInfoLogin(login);
    }


}
