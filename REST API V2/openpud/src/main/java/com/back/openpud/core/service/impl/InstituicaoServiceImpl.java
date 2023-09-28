package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.repository.InstituicaoRepository;
import com.back.openpud.core.service.InstituicaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

@Service
public class InstituicaoServiceImpl implements InstituicaoService {
    @Autowired
    private  InstituicaoRepository repositorio;


    public InstituicaoEntity regsitarNova(InstituicaoEntity instituicao) {

        return repositorio.save(instituicao);
    }

    @Override
    public Page<InstituicaoEntity> listarTodasInstituicoes() {
        var listaint = repositorio.findAll();
        return new PageImpl<>(listaint);
    }
}
