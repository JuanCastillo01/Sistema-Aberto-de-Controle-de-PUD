package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.repository.InstituicaoRepository;
import com.back.openpud.core.service.InstituicaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
@RequiredArgsConstructor
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

    @Override
    public InstituicaoEntity criarNovaInstituicao(InstituicaoEntity entity) {
        var instituicaoSalva = repositorio.save(entity);
        return instituicaoSalva;
    }
}
