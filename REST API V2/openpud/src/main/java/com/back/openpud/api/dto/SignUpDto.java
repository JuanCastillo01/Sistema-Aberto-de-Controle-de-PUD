package com.back.openpud.api.dto;

import com.back.openpud.api.dto.request.InstituicaoRequestDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignUpDto {
    private String login;
    private String email;
    private String password;
    private InstituicaoRequestDTO instituicao;

}
