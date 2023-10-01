package com.back.openpud.api.dto;

import com.back.openpud.api.dto.response.JwtResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String nomeUsuario;
    private String login;
    private String password;
    private String email;
    private String permissao;
    private JwtResponse token;

}
