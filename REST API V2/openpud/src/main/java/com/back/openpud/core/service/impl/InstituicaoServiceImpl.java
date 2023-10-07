package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.DominiosAcademicosEntity;
import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.repository.InstituicaoRepository;
import com.back.openpud.core.service.InstituicaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

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

    @Override
    public void hardcodeInt() {

        var instituicaoHardcode = InstituicaoEntity
                .builder()
                .id(Long.parseLong("-1"))
                .siglaInstituicao("UHT")
                .nomeInstituicao("Unversidade Hardcode Testes")
                .build();
        var dominio1 = DominiosAcademicosEntity.builder().instituicao(instituicaoHardcode).domino("@aluno.uht.edu.br").build();
        var dominio2 = DominiosAcademicosEntity.builder().instituicao(instituicaoHardcode).domino("@prof.uht.edu.br").build();
        var listaDom = List.of(dominio1,dominio2);
        instituicaoHardcode.setDominiosAcademicos(listaDom);
        ExampleMatcher evitaId = ExampleMatcher.matching().withIgnorePaths("id");
        Example<InstituicaoEntity> exampleParaBusca = Example.of(instituicaoHardcode, evitaId);
        if(!repositorio.exists(exampleParaBusca)){
            repositorio.save(instituicaoHardcode);
        }
    }

}
