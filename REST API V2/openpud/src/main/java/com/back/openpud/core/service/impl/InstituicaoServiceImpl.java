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
import java.util.Random;
@RequiredArgsConstructor
@Service
public class InstituicaoServiceImpl implements InstituicaoService {
    private static final String[] UNIVERSIDADES = {"UFC", "USP", "UNB", "UFMG", "UFRJ", "UFT"};
    private static final String[] PALAVRAS = {"Instituto", "Universidade", "Centro", "Escola", "Faculdade", "Colégio"};
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
    public List<InstituicaoEntity> mock10Casos() {

        List<InstituicaoEntity> casosExemplo = new ArrayList<>();

        Random random = new Random();

        for (int i = 1; i <= 10; i++) {
            InstituicaoEntity InstituicaoEntity = new InstituicaoEntity();
            InstituicaoEntity.setId((long) i);

            // Gera uma sigla de universidade aleatória
            String siglaUniversidade = UNIVERSIDADES[random.nextInt(UNIVERSIDADES.length)];
            InstituicaoEntity.setSiglaInstituicao(siglaUniversidade);

            // Gera um nome de instituição aleatório
            String nomeInstituicaoEntity = PALAVRAS[random.nextInt(PALAVRAS.length)] + " " + PALAVRAS[random.nextInt(PALAVRAS.length)];
            InstituicaoEntity.setNomeInstituicao(nomeInstituicaoEntity);

            // Gera um caminho de e-mail baseado na sigla da universidade
            String caminhoEmail = siglaUniversidade.toLowerCase() + "@example.com";
            InstituicaoEntity.setCaminhoEmail(caminhoEmail);

            casosExemplo.add(InstituicaoEntity);
        }

        return repositorio.saveAll(casosExemplo);
    }
}
