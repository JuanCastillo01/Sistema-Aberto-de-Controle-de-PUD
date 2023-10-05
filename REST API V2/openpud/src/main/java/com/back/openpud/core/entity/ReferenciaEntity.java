package com.back.openpud.core.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity(name = "ReferencialEntity")
@Table(name = "REFERENCIA")
@NoArgsConstructor
@AllArgsConstructor
public class ReferenciaEntity {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "TP_FORMATO", nullable = false)
    private String tipo;

    @Column(name = "ABNT")
    private String citacaoABNT;

    @Column(name = "TITULO", nullable = false)
    private String titulo;

    @Column(name = "SUBTITULO")
    private String subtitulo;

    @Column(name = "EDICAO")
    private String edicao;

    @Column(name = "LOCAL", nullable = false)
    private String local;

    @Column(name = "ANO_PUBLICADO", nullable = false)
    private String anoPublicado;

    @Column(name = "EDITORA", nullable = false)
    private String editora;

    @Column(name = "AUTORIA", nullable = false)
    private String autoria;
}