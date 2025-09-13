export default function ListaExames() {
  const exames = ["Eletrocardiograma", "Ecocardiograma", "Teste ergométrico"];
  return (
    <ul>
      {exames.map((exame, index) => (
        <li key={index}>{exame}</li>
      ))}
    </ul>
  );
}
