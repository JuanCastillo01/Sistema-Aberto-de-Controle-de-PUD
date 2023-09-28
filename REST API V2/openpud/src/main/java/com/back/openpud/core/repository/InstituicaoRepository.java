package com.back.openpud.core.repository;

import com.back.openpud.core.entity.InstituicaoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstituicaoRepository extends JpaRepository<InstituicaoEntity, Long> {
}
