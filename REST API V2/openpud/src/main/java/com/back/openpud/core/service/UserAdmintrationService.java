package com.back.openpud.core.service;

import com.back.openpud.core.entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserAdmintrationService {
    public List<UserEntity> listarUsuarios();
    public List<UserEntity> listarUsuariosPorInstituicao(Long codigoInstitucao);
    public UserEntity alterarPermissoes(Long id, String Permissão);

    public void deletarUsusario(UserEntity entidade);
}
