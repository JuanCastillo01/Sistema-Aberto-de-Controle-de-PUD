import { Typography, Grid, Divider } from "@mui/material"
import { getEmail, getNomeInstituicao, getPermissao } from "../api/axiosHelper"
import TabelaBasicaPermissoes from "../componentes/TabelaBasicaPermissoes"

export const SeeUserInfo = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Instituição: {getNomeInstituicao()}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Cargo: {getPermissao()}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Permissões:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TabelaBasicaPermissoes/>
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Email: {getEmail()}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Criação do Usuário : {"14/05"}
                </Typography>
            </Grid>
        </Grid>
    )
}
