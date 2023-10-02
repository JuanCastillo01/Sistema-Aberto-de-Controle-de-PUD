package com.back.openpud.api.dto.mapper;

import com.back.openpud.api.dto.request.InstituicaoRequestDTO;
import com.back.openpud.core.entity.InstituicaoEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface InstituicaoMapper {
    public InstituicaoEntity toEntity(InstituicaoRequestDTO dto);
    public  InstituicaoRequestDTO toDomain(InstituicaoEntity dto);
}
