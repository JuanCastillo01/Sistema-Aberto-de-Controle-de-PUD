import Typography from "@mui/material/Typography/Typography";

export interface IRefencias{
    id: number | null,
    tipo: string;
    titulo: string;
    subtitulo: string | null;
    edicao: string | null;
    local: string;
    anoPublicado: string;
    editora: string;
    autoria: string;
  }
  const listaTestes :IRefencias[] = []
  
const formatarAutoria = (autoria: string): string => {
  const partesNome = autoria.split(' ');
  const sobrenome = partesNome[partesNome.length - 1];
  const nomeAbreviado = `${partesNome.slice(0, -1).map((parte) => parte.charAt(0).toUpperCase()).join('. ')}.`;
  return `${sobrenome.toUpperCase()}, ${nomeAbreviado}`;
};


const gerarReferenciaABNT = (referencia: IRefencias): JSX.Element => {
  return (
    <Typography variant="body1">
      <Typography component="span" variant="body1">
        {formatarAutoria(referencia.autoria)  }
      </Typography>
      <Typography component="span" variant="body1">
        {'. '}
      </Typography>
      <Typography component="span" variant="body1" fontWeight="bold">
        {referencia.titulo}
      </Typography>
      {referencia.subtitulo && (
        <Typography component="span" variant="body1">
          {': '}
        </Typography>
      )}
      {referencia.subtitulo && (
        <Typography component="span" variant="body1">
          {referencia.subtitulo}
        </Typography>
      )}
      {referencia.edicao && (
        <Typography component="span" variant="body1">
          {` (${referencia.edicao} ed.) `}
        </Typography>
      )}
      <Typography component="span" variant="body1">
        {`${referencia.local}: `}
      </Typography>
      <Typography component="span" variant="body1">
        {`${referencia.editora}, `}
      </Typography>
      <Typography component="span" variant="body1">
        {`${referencia.anoPublicado}. `}
      </Typography>
      <Typography component="span" variant="body1">
        {`Acesso em ${new Date().toLocaleDateString('pt-BR')}.`}
      </Typography>
    </Typography>
  );
};

export default gerarReferenciaABNT;
