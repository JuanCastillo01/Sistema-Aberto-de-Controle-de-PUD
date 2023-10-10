package com.back.openpud.core.entity.enums;

import com.back.openpud.core.strategy.PermissaoStrategy;
import lombok.AllArgsConstructor;
import lombok.Getter;


public enum PermissionType implements PermissaoStrategy {
    ADMINISTRATOR_DO_SISTEMA,
    ADMINISTRADOR_DA_INSTITUICAO{
        @Override
        public void acessarGestãoDeUsuarios() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }

        @Override
        public void criarInstituicao() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }

        @Override
        public void deletarInstituicao() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }

        @Override
        public void editarReferencia() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }

        @Override
        public void deletarReferencia() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
    },
    GESTOR_DA_INSTITUICAO{
        @Override
        public void acessarGestãoDeUsuarios() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void criarInstituicao() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void editarInstituicao() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void deletarInstituicao() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void deletarPud() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void deletarMatriz() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void deletarReferencia() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
    },
    VISITANTE_DA_INSTITUICAO{
        @Override
        public void acessarGestãoDeUsuarios() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void criarInstituicao() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void editarInstituicao() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void deletarInstituicao() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void criarPUD() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void alterarPud() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void deletarPud() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void criarMatriz() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void editarMatriz() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void deletarMatriz() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void criarReferencia() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void editarReferencia() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
        @Override
        public void deletarReferencia() {
            throw new RuntimeException("Cargo do usuario não permite ação");
        }
    };

    @Override
    public void acessarGestãoDeUsuarios() {

    }
    @Override
    public void criarInstituicao() {

    }
    @Override
    public void editarInstituicao() {

    }
    @Override
    public void deletarInstituicao() {

    }
    @Override
    public void criarPUD() {

    }
    @Override
    public void alterarPud() {

    }
    @Override
    public void deletarPud() {

    }
    @Override
    public void criarMatriz() {

    }
    @Override
    public void editarMatriz() {

    }
    @Override
    public void deletarMatriz() {

    }
    @Override
    public void criarReferencia() {

    }
    @Override
    public void editarReferencia() {

    }
    @Override
    public void deletarReferencia() {

    }
}

