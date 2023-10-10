package com.back.openpud.core.service;

import com.back.openpud.core.entity.UserEntity;
import com.back.openpud.core.entity.enums.PermissionType;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public interface UserAdmintrationService {
    public Page<UserEntity> listarUsuarios();
    public Page<UserEntity> listarUsuariosPorInstituicao(Long codigoInstitucao);
    public UserEntity alterarUsuario(Long id,UserEntity entity);

    public void deletarUsusario(Long id);
}
