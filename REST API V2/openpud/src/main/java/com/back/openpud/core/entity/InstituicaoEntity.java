package com.back.openpud.core.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Column(name = "NM_INSTITUCAO")
    private String nomeInstituicao;

    @Column(name = "CAMINHO_EMAIL")
    private String caminhoEmail;

    @OneToMany(mappedBy = "instituicao")
    private Set<MatrizesEntity> matrizes;

    @OneToMany(mappedBy = "instituicao")
    private Set<UserEntity> usuarios;
}
