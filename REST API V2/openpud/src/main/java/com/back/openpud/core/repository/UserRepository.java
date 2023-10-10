package com.back.openpud.core.repository;

import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
    public Optional<UserEntity> findByLogin(String login);

    public Boolean existsByInstituicao(InstituicaoEntity instituicao);

    public List<UserEntity> findAllByInstituicaoId(Long instituicaoId);
}
