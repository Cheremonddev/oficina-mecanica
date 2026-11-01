export type Prioridade = "Baixa" | "Média" | "Alta";
export type StatusServico = "Pendente" | "Em Andamento" | "Concluído";

export interface ServicoOficina {
  id: number;
  veiculo: string;
  descricaoServico: string;
  prioridade: Prioridade;
  status: StatusServico;