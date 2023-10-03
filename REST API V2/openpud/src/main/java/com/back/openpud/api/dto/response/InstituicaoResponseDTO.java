package com.back.openpud.api.dto.response;

import com.back.openpud.core.entity.DominiosAcademicosEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstituicaoResponseDTO {
    private String id;
    private String siglaInstituicao;
    private String nomeInstituicao;
    private List<DominiosAcademicosEntity> dominiosAcademicos;
}