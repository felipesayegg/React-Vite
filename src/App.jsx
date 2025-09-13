import { Fragment, Suspense, useContext, useMemo, useCallback, useState } from "react";
import { PacienteContext } from "./context/PacienteContext.jsx";
import ExemploJSX from "./components/ExemploJSX.jsx";
import EstiloInline from "./components/EstiloInline.jsx";
import RelatorioPaciente from "./components/RelatorioPaciente.jsx";
import ListaExames from "./components/ListaExames.jsx";
import CardPaciente from "./components/CardPaciente.jsx";
import { lazy, memo } from "react";

const PainelLento = lazy(() => import("./components/PainelLento.jsx"));

// componente “puro” para exemplificar memo
const LabelMemo = memo(function LabelMemo({ label }) {
  return <span style={{ fontWeight: 600 }}>{label}</span>;
});

export default function App() {
  const { paciente, setPaciente } = useContext(PacienteContext);
  const [pressao, setPressao] = useState({ sis: 120, dia: 80 });

  // useMemo: evita recomputar “status”
  const statusPressao = useMemo(() => {
    const { sis, dia } = pressao;
    if (sis > 139 || dia > 89) return "Alerta: Pressão Alta";
    if (sis < 90 || dia < 60) return "Atenção: Pressão Baixa";
    return "Normal";
  }, [pressao]);

  // useCallback: mantém a identidade da função entre renders
  const atualizarIdade = useCallback(() => {
    setPaciente((p) => ({ ...p, idade: p.idade + 1 }));
  }, [setPaciente]);

  return (
    <Fragment>
      {/* 1. JSX básico */}
      <ExemploJSX />

      {/* 2. Inline styles */}
      <EstiloInline />

      {/* 3. Props */}
      <RelatorioPaciente nome={paciente.nome} idade={paciente.idade} />

      {/* 4. Lista */}
      <ListaExames />

      {/* 5. Styled Components */}
      <CardPaciente nome={paciente.nome} idade={paciente.idade} status={statusPressao} />

      {/* 6. useMemo + memo */}
      <p>
        <LabelMemo label="Status da Pressão:" /> {statusPressao}
      </p>

      {/* 7. useCallback */}
      <button onClick={atualizarIdade}>Aniversário do paciente 🎂</button>

      {/* 8. Atualizar pressão (exemplo simples) */}
      <div style={{ marginTop: 12 }}>
        <button onClick={() => setPressao({ sis: 150, dia: 95 })}>Setar Pressão Alta</button>
        <button onClick={() => setPressao({ sis: 120, dia: 80 })} style={{ marginLeft: 8 }}>
          Setar Normal
        </button>
      </div>

      {/* 9. Suspense + lazy */}
      <Suspense fallback={<p>Carregando painel…</p>}>
        <PainelLento />
      </Suspense>
    </Fragment>
  );
}
