package com.back.openpud.core.repository;

import com.back.openpud.core.entity.ReferenciaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferenciaRepository extends JpaRepository<ReferenciaEntity,Long> {
}
