import { HomeOutlined } from "@mui/icons-material";
import BuscaDePUD from "../pages/BuscaDePUD";
import BuscaPorMatrizes from "../pages/BuscaPorMatrizes";
import Contato from "../pages/Contato";
import HomePage from "../pages/HomePage";
import ManterAssuntos from "../pages/ManterAssuntos";
import ManterInstitucoes from "../pages/ManterInstitucoes";
import ManterMatrizes from "../pages/ManterMatrizes";
import ManterPUDs from "../pages/ManterPUDs";
import ManterReferencias from "../pages/ManterReferencias";
import ManterUsuarios from "../pages/ManterUsuarios";
import { IModule } from "../tipagem/IModule";
import SelecaoUsuario from "../pages/SelecaoUsuario";
import { IErro } from "../tipagem/IGeral";

export const systemModules : IModule[] = [
    {
      name: "User Configure",
      path: "/usuario",
      icone: <HomeOutlined />,
      element: <SelecaoUsuario/>,
      permissonType: "generico"
    },
    {
      name: "Principal",
      path: "/",
      icone: <HomeOutlined />,
      element: <HomePage/>,
      permissonType: "generico"
    },
    {
      name: "Busca por Matrizes",
      path: "/buscar-por-matrizes",
      icone: <HomeOutlined />,
      element: <BuscaPorMatrizes/>,
      permissonType: "generico"
    },
    {
      name: "Busca de PUD",
      path: "/busca-de-pud",
      icone: <HomeOutlined />,
      element: <BuscaDePUD/>,
      permissonType: "generico"
    },
    {
      name: "Manter instituições",
      path: "/manter-intituicoes",
      icone: <HomeOutlined />,
      element: <ManterInstitucoes/>,
      permissonType: "generico"
    },
    {
      name: "Manter Matrizes",
      path: "/manter-matrizes",
      icone: <HomeOutlined />,
      element: <ManterMatrizes/>,
      permissonType: "generico"
    },
    {
      name: "Manter Assuntos",
      path: "/manter-assuntos",
      icone: <HomeOutlined />,
      element: <ManterAssuntos/>,
      permissonType: "generico"
    },
    {
      name: "Manter PUDs",
      path: "/manter-puds",
      icone: <HomeOutlined />,
      element: <ManterPUDs/>,
      permissonType: "generico"
    },
    {
      name: "Manter Referencias",
      path: "/manter-referencias",
      icone: <HomeOutlined />,
      element: <ManterReferencias/>,
      permissonType: "generico"
    },
    {
      name: "Manter Usuarios",
      path: "/manter-usuarios",
      icone: <HomeOutlined />,
      element: <ManterUsuarios/>,
      permissonType: "generico"
    },
    {
      name: "Contato",
      path: "/contato",
      icone: <HomeOutlined />,
      element: <Contato/>,
      permissonType: "generico"
    }
] 
export const erroInitialState : IErro = {
  erro: false,
  mensagem: ""
}