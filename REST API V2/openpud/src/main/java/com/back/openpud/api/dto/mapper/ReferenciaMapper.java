package com.back.openpud.api.dto.mapper;

import com.back.openpud.api.dto.request.ReferenciaRequestDTO;
import com.back.openpud.api.dto.response.ReferenciaResponseDTO;
import com.back.openpud.core.entity.ReferenciaEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReferenciaMapper {
    public ReferenciaEntity toEntity(ReferenciaRequestDTO dto);
    public ReferenciaResponseDTO toDomain(ReferenciaEntity entity);
}
