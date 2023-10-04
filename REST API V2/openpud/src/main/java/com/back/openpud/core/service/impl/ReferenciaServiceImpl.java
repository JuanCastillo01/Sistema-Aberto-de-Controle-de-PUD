package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.ReferenciaEntity;
import com.back.openpud.core.repository.ReferenciaRepository;
import com.back.openpud.core.service.ReferenciaService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ReferenciaServiceImpl implements ReferenciaService {
    private final ReferenciaRepository repository;

    @Override
    public ReferenciaEntity salvarReference(ReferenciaEntity entidade) {
        ExampleMatcher ignorarId  = ExampleMatcher
                .matchingAll()
                .withIgnorePaths("id");
        Example<ReferenciaEntity> example = Example.of(entidade, ignorarId);

        if(repository.exists(example)){
            throw new RuntimeException("Entidade ja existe");
        }
        return repository.save(entidade);
    }

    @Override
    public void deleteReference(Long id) {
        if(repository.existsById(id)){
            repository.deleteById(id);
        }
    }

    @Override
    public List<ReferenciaEntity> getAllReference() {
        return repository.findAll();
    }

}
