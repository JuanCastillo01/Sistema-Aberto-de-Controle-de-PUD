package com.back.openpud.api.controller;

import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.service.InstituicaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InstituicaoController {
    @Autowired
    private InstituicaoService service;


    @GetMapping("/instituicoes")
    public ResponseEntity<Page<InstituicaoEntity>> visualizarCasos(){
        return ResponseEntity.ok(service.listarTodasInstituicoes());
    }

    @GetMapping("/adicionarCasos")
    public ResponseEntity<List<InstituicaoEntity>> adicionarCasosMock(){
        return ResponseEntity.ok(service.mock10Casos());
    }
}
