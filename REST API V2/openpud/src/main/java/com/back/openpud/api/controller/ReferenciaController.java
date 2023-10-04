package com.back.openpud.api.controller;

import com.back.openpud.api.dto.mapper.ReferenciaMapper;
import com.back.openpud.api.dto.request.ReferenciaRequestDTO;
import com.back.openpud.api.dto.response.ReferenciaResponseDTO;
import com.back.openpud.core.service.ReferenciaService;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
public class ReferenciaController {
    private final ReferenciaService service;
    private final ReferenciaMapper mapper;
    @GetMapping("/referencias/listar")
    public ResponseEntity<Page<ReferenciaResponseDTO>> getAllReferences(){
        var reponse = new PageImpl<>(
                service.getAllReference()
                        .stream()
                        .map(mapper::toDomain)
                        .collect(Collectors.toList()));
        return ResponseEntity.ok(reponse);
    }
    @PostMapping("/referencias/inserir")
    public ResponseEntity<ReferenciaResponseDTO> addReferencia(@RequestBody ReferenciaRequestDTO request){
            return ResponseEntity
                .ok(
                        mapper.toDomain(
                                service.salvarReference(
                                        mapper.toEntity(request))));
    }
    @PostMapping("/referencias/inserir/mock")
    public void addReferenciaMock(){
        service.salvarReferenciasMock();
    }

    @PutMapping("/referencias/editar")
    public ResponseEntity<ReferenciaResponseDTO> editReferencia(@RequestBody ReferenciaRequestDTO dto){
        return ResponseEntity.ok(mapper.toDomain(service.editarReferencia(mapper.toEntity(dto))));
    }

    @DeleteMapping("/referencias/delete/{id}")
    public void deleteRefrencia(@PathVariable Long id){
        service.deleteReference(id);
    }
}
