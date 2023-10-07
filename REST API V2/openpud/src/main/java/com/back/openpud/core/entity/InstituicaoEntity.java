package com.back.openpud.core.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "instituicaoEntity")
@Table(name = "INSTITUICAO")
public class InstituicaoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @Column(name = "SLG_INSTITUCAO")
      private String siglaInstituicao;

    @Column(name = "NM_INSTITUCAO")
    private String nomeInstituicao;


    @OneToMany(mappedBy = "instituicao", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("instituicao")  // This annotation prevents serialization of the related property
    private List<DominiosAcademicosEntity> dominiosAcademicos;

    @OneToMany(mappedBy = "instituicao")
    private List<MatrizesEntity> matrizes;


}