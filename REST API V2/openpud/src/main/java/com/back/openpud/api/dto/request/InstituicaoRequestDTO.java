package com.back.openpud.api.dto.request;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstituicaoRequestDTO {
    private String siglaInstituicao;
    private String nomeInstituicao;
    private String caminhoEmail;
}
