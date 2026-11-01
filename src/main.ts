import { elemento } from "./dom.ts";
import { servicosIniciais } from "./dados.ts";
import { calcularPendentes } from "./servicos.ts";
import { ServicoOficina } from "./tipos.ts";

const nomeSistema: string = "Oficina Mecânica - Gestão de Serviços";
const versaoSistema: number = 1;
const dataAtual: string = "22/10/2026";

elemento("nome-do-sistema").textContent = ${nomeSistema} v${versaoSistema} (${dataAtual});

let listaServicos: ServicoOficina[] = [...servicosIniciais];

function desenhar(): void {
  const container = elemento("lista-servicos");
  const painelTotal = elemento("total-servicos");
  const painelPendentes = elemento("total-pendentes");

  container.replaceChildren();

  for (const s of listaServicos) {
    const item = document.createElement("…