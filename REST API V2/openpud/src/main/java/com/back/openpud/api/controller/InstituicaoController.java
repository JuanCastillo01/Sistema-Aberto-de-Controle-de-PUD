package com.back.openpud.api.controller;

import com.back.openpud.api.dto.mapper.InstituicaoMapper;
import com.back.openpud.api.dto.request.InstituicaoRequestDTO;
import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.service.InstituicaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RequiredArgsConstructor
@RestController
public class InstituicaoController {

    private final InstituicaoService service;

    private final InstituicaoMapper mapper;

    @GetMapping("/instituicoes")
    public ResponseEntity<Page<InstituicaoEntity>> visualizarCasos(){
        return ResponseEntity.ok(service.listarTodasInstituicoes());
    }

    @PostMapping("/instituicoes/adicionar")
    public ResponseEntity<InstituicaoEntity> adicionar(@RequestBody InstituicaoRequestDTO requestDto){
        return ResponseEntity.ok(service.criarNovaInstituicao(mapper.toEntity(requestDto) ));
    }
}
