package com.back.openpud.core.service.impl;

import com.back.openpud.core.entity.ReferenciaEntity;
import com.back.openpud.core.repository.ReferenciaRepository;
import com.back.openpud.core.service.ReferenciaService;
import jakarta.transaction.Transactional;
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
    @Override
    public void salvarReferenciasMock() {
        for (int i = 1; i <= 10; i++) {
            ReferenciaEntity referencia = new ReferenciaEntity();
            referencia.setTipo("Livro");
            referencia.setCitacaoABNT("AUTOR, A. Título do livro. Edição. Editora, Ano.");
            referencia.setTitulo("Título do Livro " + i);

            // Adiciona subtitulo aleatoriamente com 50% de chance
            if (Math.random() < 0.5) {
                referencia.setSubtitulo("Subtítulo do Livro " + i);
            }

            // Adiciona edição aleatoriamente com 50% de chance
            if (Math.random() < 0.5) {
                referencia.setEdicao("1ª edição");
            }

            referencia.setLocal("São Paulo");
            referencia.setAnoPublicado("2021");
            referencia.setEditora("Editora XYZ");
            referencia.setAutoria("Autor Begno Da Gamma" + i);

            repository.save(referencia);
        }
    }
}
