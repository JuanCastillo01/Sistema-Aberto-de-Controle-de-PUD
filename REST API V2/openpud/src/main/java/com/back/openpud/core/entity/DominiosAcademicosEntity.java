package com.back.openpud.core.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "DominiosAcademicosEntity")
@Table(name = "DOMINIOS_EMAIL")
public class DominiosAcademicosEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Endereco_Dominio",unique = true)
    private String domino;

    @ManyToOne
    @JoinColumn(name="instituicao_id",nullable = false, updatable = false)
    @JsonIgnoreProperties("dominiosAcademicos")  // This annotation prevents serialization of the related property
    private InstituicaoEntity instituicao;
}
