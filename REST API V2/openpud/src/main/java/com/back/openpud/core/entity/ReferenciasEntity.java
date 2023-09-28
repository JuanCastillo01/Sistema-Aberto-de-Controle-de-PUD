package com.back.openpud.core.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity(name = "referenciasEntity")
@Table(name = "REFERENCIA")
public class ReferenciasEntity {
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "TITULO")
    private String titulo;

    @Column(name = "ABNT")
    private String citacaoABNT;

    public ReferenciasEntity() {
    }

    public ReferenciasEntity(Long id, String titulo, String citacaoABNT) {
        this.id = id;
        this.titulo = titulo;
        this.citacaoABNT = citacaoABNT;
    }
}
