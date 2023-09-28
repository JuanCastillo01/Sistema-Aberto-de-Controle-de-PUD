package com.back.openpud.core.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "matrizesEntity")
@Table(name = "MARTIZES")
public class MatrizesEntity {
    @Id
    @Column(name = "Id")
    private Long id;

    @Column(name="NM_MATRIZ")
    private Long tituloMatriz;

    @Column(name="DE_MATRIZ", nullable = true)
    private Long descricaoMatriz;

    @OneToMany(mappedBy = "matriz")
    private List<PudEntity> puds;

    @ManyToOne
    private InstituicaoEntity instituicao;

}
