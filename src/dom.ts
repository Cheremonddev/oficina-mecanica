
export function elemento(id: string): HTMLElement {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(Elemento com id '${id}' não foi encontrado.);
  }
  return el;
}