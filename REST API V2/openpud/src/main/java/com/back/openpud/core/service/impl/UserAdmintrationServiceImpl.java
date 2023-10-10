package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.UserEntity;
import com.back.openpud.core.entity.enums.PermissionType;
import com.back.openpud.core.repository.UserRepository;
import com.back.openpud.core.service.UserAdmintrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

@Service
public class UserAdmintrationServiceImpl implements UserAdmintrationService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public Page<UserEntity> listarUsuarios() {
        return new PageImpl<>(userRepository.findAll());
    }

    @Override
    public Page<UserEntity> listarUsuariosPorInstituicao(Long codigoInstitucao) {
        return new PageImpl<>(userRepository.findAllByInstituicaoId(codigoInstitucao));
    }

    @Override
    public UserEntity alterarUsuario(Long id, UserEntity entity) {
        var usuarioEscolhido = userRepository.findById(id);
        if(usuarioEscolhido.isEmpty()){
            throw new RuntimeException("Entidade não existe");
        }
        var usuarioAlterado = usuarioEscolhido.get();

        if(entity.getEmail() != null || entity.getLogin() != null){
            usuarioAlterado.setEmail(entity.getEmail());
            usuarioAlterado.setLogin(entity.getLogin());

        }
        if(entity.getInstituicao() != null){
            usuarioAlterado.setInstituicao(entity.getInstituicao());
        }
        if(entity.getPermissao() != null){
            usuarioAlterado.setPermissao(entity.getPermissao());

        }
        return userRepository.save(entity);
    }


    @Override
    public void deletarUsusario(Long id) {
        if(!userRepository.existsById(id)){
            throw new RuntimeException("Entidade não existe");
        }
        userRepository.deleteById(id);
    }
}
