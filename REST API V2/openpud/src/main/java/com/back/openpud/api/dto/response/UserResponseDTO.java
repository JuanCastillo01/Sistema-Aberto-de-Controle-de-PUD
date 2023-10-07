package com.back.openpud.api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDTO {
    private Long id;
    private String nomeUsuario;
    private String login;
    private String email;
    private String permissao;
    private JwtResponse token;

}
