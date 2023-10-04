package com.back.openpud.api.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReferenciaRequestDTO {
    private String tipo;
    private String citacaoABNT;
    private String titulo;
    private String subtitulo;
    private String edicao;
    private String local;
    private String anoPublicado;
    private String editora;
    private String autoria;
}

