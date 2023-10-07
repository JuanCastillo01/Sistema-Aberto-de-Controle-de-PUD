package com.back.openpud.api.controller;

import com.back.openpud.api.dto.mapper.InstituicaoMapper;
import com.back.openpud.api.dto.request.InstituicaoRequestDTO;
import com.back.openpud.api.dto.response.InstituicaoResponseDTO;
import com.back.openpud.core.entity.InstituicaoEntity;
import com.back.openpud.core.service.InstituicaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<InstituicaoResponseDTO> adicionar(@RequestBody InstituicaoRequestDTO requestDto){
        return ResponseEntity.ok(mapper.toDomain(service.criarNovaInstituicao(mapper.toEntity(requestDto))));
    }
    @PutMapping("/instituicoes/editar")
    public ResponseEntity<InstituicaoResponseDTO> editar(@RequestBody InstituicaoRequestDTO requestDto){
        return ResponseEntity.ok(mapper.toDomain(service.editarInstituicao(mapper.toEntity(requestDto) )));
    }

}
