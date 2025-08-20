export default function BoasVindas({ nome = "visitante" }) {
  // 'nome' é prop: vem do pai; aqui não alteramos
  return <h2>Bem-vindo, {nome}!</h2>;
}