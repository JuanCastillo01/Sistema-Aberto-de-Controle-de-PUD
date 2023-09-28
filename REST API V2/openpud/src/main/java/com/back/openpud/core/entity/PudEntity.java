package com.back.openpud.core.entity;

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
@Entity(name = "PudEntity")
@Table(name = "PUDs")
public class PudEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @ManyToOne
    private MatrizesEntity matriz;

    @Column(name = "NM_COMPONENTE_CURRICULAR")
    private String nomePud;

    @Column(name = "DE_EMENTA")
    private String descriçãoEmenta;

    @Column(name = "DE_OBJETIVOS")
    private String decriçãoObjetivos;

    @Column(name = "METODOLOGIA")
    private String descricaoMetodologia;

    @OneToMany(mappedBy = "pud")
    private List<UnidadesEntity> programa;

    @OneToMany(mappedBy = "pud")
    private Set<ReferenciaBibliograficaEntity> bibliografiaPrincipal;

    @OneToMany(mappedBy = "pud")
    private Set<ReferenciaBibliograficaEntity> bibliografiaComplementar;

}
