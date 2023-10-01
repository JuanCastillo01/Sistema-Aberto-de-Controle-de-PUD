package com.back.openpud.core.service;

import com.back.openpud.core.entity.RefreshTokenEntity;
import com.back.openpud.core.entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public interface RefreshTokenService {
    public RefreshTokenEntity ValidateToken(RefreshTokenEntity token);
    public RefreshTokenEntity createRefreshToken(String login);

    public Optional<RefreshTokenEntity> recuperarToken(String token);

    public Optional<RefreshTokenEntity> findRefreshTokenByUserLogin(String login);

}
