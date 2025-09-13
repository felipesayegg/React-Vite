export default function RelatorioPaciente({ nome, idade }) {
  return (
    <section>
      <h3>Relatório Médico</h3>
      <p>Nome: {nome}</p>
      <p>Idade: {idade} anos</p>
    </section>
  );
}
