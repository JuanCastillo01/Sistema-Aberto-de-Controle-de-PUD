package com.back.openpud.api.dto.response;

import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.entity.enums.PermissionType;
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
    private String login;
    private String email;
    private PermissionType permissao;
    private InstituicaoEntity instituicao;
    private JwtResponse token;

}
