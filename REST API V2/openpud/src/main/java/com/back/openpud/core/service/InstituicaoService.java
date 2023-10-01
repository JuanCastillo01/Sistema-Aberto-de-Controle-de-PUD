package com.back.openpud.core.service;

import com.back.openpud.core.entity.InstituicaoEntity;
import org.springframework.data.domain.Page;

import java.util.List;

public interface InstituicaoService {
    public InstituicaoEntity regsitarNova(InstituicaoEntity instituicao);
    public Page<InstituicaoEntity> listarTodasInstituicoes();
    public List<InstituicaoEntity> mock10Casos();

}
