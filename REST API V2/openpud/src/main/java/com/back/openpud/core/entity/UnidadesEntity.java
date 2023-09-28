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
@Entity(name = "unidadesEntity")
@Table(name = "UNIDADES")
public class UnidadesEntity {
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME_UNIDADE")
    private String nomeUnidade;

    @Column(name = "SEQUENCIA")
    private Long index;

    @OneToMany(mappedBy = "unidade")
    private List<AssuntoEntity> assuntos;

    @ManyToOne
    private PudEntity pud;

}
