package com.back.openpud.core.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "referenciaBibliograficaEntity")
@Table(name = "REFERENCIA_BIBLIOGRAFIA")
public class ReferenciaBibliograficaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "TIPO_REFERENCIA", length = 1)
    private String tipoReferencia;

    @ManyToOne
    @JoinColumn(name = "id_infoReferencia")
    private ReferenciasEntity infoReferencia;

    @ManyToOne
    private PudEntity pud;

}
