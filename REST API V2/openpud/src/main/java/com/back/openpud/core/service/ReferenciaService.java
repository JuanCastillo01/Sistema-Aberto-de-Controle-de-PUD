package com.back.openpud.core.service;

import com.back.openpud.core.entity.ReferenciaEntity;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ReferenciaService {
    public ReferenciaEntity salvarReference(ReferenciaEntity entidade);

    public void deleteReference(Long entidade);

    public List<ReferenciaEntity> getAllReference();

    public ReferenciaEntity editarReferencia(ReferenciaEntity entidade);

    public void salvarReferenciasMock();

}
