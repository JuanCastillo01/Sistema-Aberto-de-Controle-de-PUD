package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.UserEntity;
import com.back.openpud.core.service.UserAdmintrationService;

import java.util.List;

public class UserAdmintrationServiceImpl implements UserAdmintrationService {

    @Override
    public List<UserEntity> listarUsuarios() {
        return null;
    }

    @Override
    public List<UserEntity> listarUsuariosPorInstituicao(Long codigoInstitucao) {
        return null;
    }

    @Override
    public UserEntity alterarPermissoes(Long id, String Permissão) {
        return null;
    }

    @Override
    public void deletarUsusario(UserEntity entidade) {

    }
}
