package com.back.openpud.core.entity;

import com.back.openpud.core.entity.enums.PermissionType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "UsusariosRegistradosEntity")
@Table(name = "USUARIOS")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME_USUARIO")
    private String nomeUsuario;

    @Column(name = "EMAIL")
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "PERMISSAO")
    private PermissionType permissao;

    @Column(name = "LOGIN")
    private String login;

    @Column(name = "SENHA")
    private String password;

    @ManyToOne
    private InstituicaoEntity instituicao;



}
