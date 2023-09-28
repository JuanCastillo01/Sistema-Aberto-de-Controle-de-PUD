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
@Entity(name = "AssuntoEntity")
@Table(name = "ASSUNTO")
public class AssuntoEntity {
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME_ASSUNTO")
    private String nomeAssunto;

    @Column(name = "SEQUENCIA")
    private Long index;

    @ManyToOne
    private UnidadesEntity unidade;



}
