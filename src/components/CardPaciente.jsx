import styled from "styled-components";

const Card = styled.section`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;
const Nome = styled.h3` color: darkred; `;
const Detalhe = styled.p` color: #555; `;

export default function CardPaciente({ nome, idade, status }) {
  return (
    <Card>
      <Nome>{nome}</Nome>
      <Detalhe>Idade: {idade}</Detalhe>
      <Detalhe>Status: {status}</Detalhe>
    </Card>
  );
}
