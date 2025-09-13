export default function PainelLento() {
  // simulação de cálculo pesado (só exemplo)
  const inicio = performance.now();
  while (performance.now() - inicio < 300) {}
  return <div>🔎 Painel carregado!</div>;
}
