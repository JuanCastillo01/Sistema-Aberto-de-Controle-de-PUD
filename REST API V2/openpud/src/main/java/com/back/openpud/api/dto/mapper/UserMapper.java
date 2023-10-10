package com.back.openpud.api.dto.mapper;

import com.back.openpud.api.dto.SignUpDto;
import com.back.openpud.api.dto.UserDto;
import com.back.openpud.api.dto.request.UserAdministracaoRequestDTO;
import com.back.openpud.api.dto.response.UserAdministracaoResponseDTO;
import com.back.openpud.api.dto.response.UserResponseDTO;
import com.back.openpud.core.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    public UserEntity toAdmEntity(UserAdministracaoRequestDTO request);
    public UserAdministracaoResponseDTO toAdmEntity(UserEntity entity);

    public  UserDto toDto(UserEntity entity);
    public UserEntity toEntity(SignUpDto dto);
    public UserResponseDTO toRespnseDto(UserDto dto);

}
