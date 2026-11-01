import { ServicoOficina } from "./tipos.ts";

export function calcularPendentes(servicos: ServicoOficina[]): number {
  let contador = 0;
  for (const s of servicos) {
    if (s.status === "Pendente" || s.status === "Em Andamento") {
      contador++;
    }
  }
  return contador;
}