package com.back.openpud.api.dto.request;

import com.back.openpud.core.entity.enums.PermissionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserAdministracaoRequestDTO {
    private Long id;
    private String login;
    private String email;
    private PermissionType permissao;
}
