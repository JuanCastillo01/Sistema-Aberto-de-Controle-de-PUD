package com.back.openpud.api.dto.request;

import com.back.openpud.api.dto.DominiosAcademicosDTO;
import com.back.openpud.core.entity.DominiosAcademicosEntity;
import com.back.openpud.core.entity.enums.PermissionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstituicaoRequestDTO {
    private String id;
    private String siglaInstituicao;
    private String nomeInstituicao;
    private List<DominiosAcademicosEntity> dominiosAcademicos;
    private PermissionType permissao;
}
