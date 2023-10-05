package com.back.openpud.api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReferenciaResponseDTO {
    private Long id;
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
