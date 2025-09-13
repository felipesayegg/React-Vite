export default function ListaNomes() {
  const nomes = ["Ana", "Bruno", "Carla", "Diego"];
  return (
    <section>
      <h2>Lista de Nomes</h2>
      <ul>
        {nomes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </section>
  );
}