package com.back.openpud.api.dto.request;

import com.back.openpud.api.dto.response.JwtResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDTO {
    private Long id;
    private String nomeUsuario;
    private String login;
    private String password;
    private String email;
    private String permissao;
    private JwtResponse token;

}
