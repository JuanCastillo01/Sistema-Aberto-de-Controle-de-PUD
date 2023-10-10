import { AccountCircle, EventNote, HomeOutlined, LibraryBooks } from "@mui/icons-material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import GroupIcon from '@mui/icons-material/Group';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Contato from "../pages/Contato";
import HomePage from "../pages/HomePage";
import ManterInstitucoes from "../pages/ManterInstitucoes";
import ManterMatrizes from "../pages/ManterMatrizes";
import ManterPUDs from "../pages/ManterPUDs";
import ManterReferencias from "../pages/ManterReferencias";
import ManterUsuarios from "../pages/ManterUsuarios";
import SelecaoUsuario from "../pages/SelecaoUsuario";
import { IErro } from "../tipagem/IGeral";
import PaginaInicial from "../pages/PaginaInicial";
import { IModule } from "../tipagem/IPermissoes";

export const systemModules : IModule[] = [
    {
      name: "Usuario",
      path: "/usuario",
      icone: <AccountCircle  fontSize="large"/>,
      element: <SelecaoUsuario/>,
      permissonType: ["ADMINISTRATOR_DO_SISTEMA","ADMINISTRADOR_DA_INSTITUICAO","GESTOR_DA_INSTITUICAO","VISITANTE_DA_INSTITUICAO"]
    },
    {
      name: "Principal",
      path: "/principal",
      icone: <HomeOutlined  fontSize="large"/>, 
      element: <HomePage/>,
      permissonType: ["ADMINISTRATOR_DO_SISTEMA","ADMINISTRADOR_DA_INSTITUICAO","GESTOR_DA_INSTITUICAO","VISITANTE_DA_INSTITUICAO"]
    },
    {
      name: "Instituição",
      path: "/instituição",
      icone: <AccountBalanceIcon  fontSize="large"/>,
      element: <ManterInstitucoes/>,
      permissonType: ["ADMINISTRADOR_DA_INSTITUICAO","GESTOR_DA_INSTITUICAO","VISITANTE_DA_INSTITUICAO"]
    },
    {
      name: "Instituições",
      path: "/manter-intituicoes",
      icone: <AccountBalanceIcon  fontSize="large"/>,
      element: <ManterInstitucoes/>,
      permissonType: ["ADMINISTRATOR_DO_SISTEMA"]
    },
    {
      name: "Matrizes",
      path: "/manter-matrizes",
      icone: <EventNote  fontSize="large"/>,
      element: <ManterMatrizes/>,
      permissonType: ["ADMINISTRATOR_DO_SISTEMA", "ADMINISTRADOR_DA_INSTITUICAO", "GESTOR_DA_INSTITUICAO"]
    },
    {
      name: "PUDs",
      path: "/manter-puds",
      icone: <LibraryBooks  fontSize="large"/>,
      element: <ManterPUDs/>,
      permissonType: ["ADMINISTRATOR_DO_SISTEMA", "ADMINISTRADOR_DA_INSTITUICAO", "GESTOR_DA_INSTITUICAO", "VISITANTE_DA_INSTITUICAO"]
    },
    {
      name: "Referencias",
      path: "/manter-referencias",
      icone: <CollectionsBookmarkIcon fontSize="large"/>,
      element: <ManterReferencias/>,
      permissonType: ["ADMINISTRATOR_DO_SISTEMA", "ADMINISTRADOR_DA_INSTITUICAO", "GESTOR_DA_INSTITUICAO"]
    },
    {
      name: "Usuarios",
      path: "/manter-usuarios",
      icone: <GroupIcon  fontSize="large"/>,
      element: <ManterUsuarios/>,
      permissonType: ["ADMINISTRATOR_DO_SISTEMA","ADMINISTRADOR_DA_INSTITUICAO"]
    },
    {
      name: "Contato",
      path: "/contato",
      icone: <ContactPhoneIcon  fontSize="large" />,
      element: <Contato/>,
      permissonType: ["ADMINISTRATOR_DO_SISTEMA","ADMINISTRADOR_DA_INSTITUICAO","GESTOR_DA_INSTITUICAO","VISITANTE_DA_INSTITUICAO"]
    }
] 

export const startPage = {
  name:"Inicial",
  path:"",
  element:<PaginaInicial/>
}

export const erroInitialState : IErro = {
  erro: false,
  mensagem: ""
}