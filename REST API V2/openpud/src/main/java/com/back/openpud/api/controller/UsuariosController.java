package com.back.openpud.api.controller;

import com.back.openpud.api.dto.mapper.UserMapper;
import com.back.openpud.core.entity.UserEntity;
import com.back.openpud.core.service.UserAdmintrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
public class UsuariosController {
    private final UserAdmintrationService userAdmintrationService;
    private final UserMapper userMapper;
    @GetMapping("/usuarios")
    public ResponseEntity<Page<UserEntity>> getAllUsuarios(){
        return ResponseEntity.ok(userAdmintrationService.listarUsuarios());
    }
    @GetMapping("/usuarios/{codigoInstituicao}")
    public ResponseEntity<Page<UserEntity>> getAllUsuariosInstituicao(@PathVariable Long id ){
        return ResponseEntity.ok(userAdmintrationService.listarUsuariosPorInstituicao(id));
    }

}
