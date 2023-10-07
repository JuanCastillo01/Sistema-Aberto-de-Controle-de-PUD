export interface IInstituicoes{
    id :number | null,

    siglaInstituicao  : string,

    nomeInstituicao : string,
    
    dominiosAcademicos : IDominios[]

}
export interface IDominios{
    id: number | null;
    domino: string;
}

