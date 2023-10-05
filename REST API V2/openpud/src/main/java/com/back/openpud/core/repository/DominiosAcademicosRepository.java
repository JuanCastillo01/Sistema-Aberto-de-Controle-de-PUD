package com.back.openpud.core.repository;

import com.back.openpud.core.entity.DominiosAcademicosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DominiosAcademicosRepository extends JpaRepository<DominiosAcademicosEntity,Long> {
}
