package com.back.openpud.api.dto;

import com.back.openpud.api.dto.response.JwtResponse;
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
public class UserDto {
    private Long id;
    private String login;
    private String password;
    private String email;
    private PermissionType  permissao;
    private InstituicaoEntity instituicao;
    private JwtResponse token;

}
