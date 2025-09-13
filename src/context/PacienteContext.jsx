import { createContext, useState } from "react";

export const PacienteContext = createContext();

export function PacienteProvider({ children }) {
  const [paciente, setPaciente] = useState({ nome: "Carlos", idade: 50 });
  return (
    <PacienteContext.Provider value={{ paciente, setPaciente }}>
      {children}
    </PacienteContext.Provider>
  );
}
