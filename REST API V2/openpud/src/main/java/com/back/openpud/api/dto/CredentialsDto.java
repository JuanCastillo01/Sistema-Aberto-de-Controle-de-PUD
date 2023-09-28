package com.back.openpud.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CredentialsDto {
    private String nomeUsuario;
    private String login;
    private String email;
    private String password;

}
