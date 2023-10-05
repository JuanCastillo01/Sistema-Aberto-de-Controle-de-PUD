package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.repository.InstituicaoRepository;
import com.back.openpud.core.service.InstituicaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InstituicaoServiceImpl implements InstituicaoService {

    @Autowired
    private InstituicaoRepository repositorio;

    @Override
    public Page<InstituicaoEntity> listarTodasInstituicoes() {
        var lista =  repositorio.findAll();

        return new PageImpl<>(lista);
    }
    @Override
    public InstituicaoEntity criarNovaInstituicao(InstituicaoEntity entity) {
        entity.getDominiosAcademicos().forEach(we->{we.setInstituicao(entity);});
        var instituicaoSalva = repositorio.save(entity);
        return instituicaoSalva;
    }
    public InstituicaoEntity editarInstituicao(InstituicaoEntity instituicao) {

        if(repositorio.existsById(instituicao.getId())){
            return repositorio.save(instituicao);
        }

        throw new RuntimeException("Não foi encontrada a instituição na base");
    }

}
