import { AccountCircle, EventNote, HomeOutlined, LibraryBooks } from "@mui/icons-material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import GroupIcon from '@mui/icons-material/Group';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
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
      name: "Usuario",
      path: "/usuario",
      icone: <AccountCircle  fontSize="large"/>,
      element: <SelecaoUsuario/>,
      permissonType: "generico"
    },
    {
      name: "Principal",
      path: "/",
      icone: <HomeOutlined  fontSize="large"/>,
      element: <HomePage/>,
      permissonType: "generico"
    },
    {
      name: "Instituições",
      path: "/manter-intituicoes",
      icone: <AccountBalanceIcon  fontSize="large"/>,
      element: <ManterInstitucoes/>,
      permissonType: "generico"
    },
    {
      name: "Matrizes",
      path: "/manter-matrizes",
      icone: <EventNote  fontSize="large"/>,
      element: <ManterMatrizes/>,
      permissonType: "generico"
    },
    {
      name: "PUDs",
      path: "/manter-puds",
      icone: <LibraryBooks  fontSize="large"/>,
      element: <ManterPUDs/>,
      permissonType: "generico"
    },
    {
      name: "Referencias",
      path: "/manter-referencias",
      icone: <CollectionsBookmarkIcon fontSize="large"/>,
      element: <ManterReferencias/>,
      permissonType: "generico"
    },
    {
      name: "Usuarios",
      path: "/manter-usuarios",
      icone: <GroupIcon  fontSize="large"/>,
      element: <ManterUsuarios/>,
      permissonType: "generico"
    },
    {
      name: "Contato",
      path: "/contato",
      icone: <ContactPhoneIcon  fontSize="large" />,
      element: <Contato/>,
      permissonType: "generico"
    }
] 
export const erroInitialState : IErro = {
  erro: false,
  mensagem: ""
}