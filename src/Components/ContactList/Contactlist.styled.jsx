import styled from "@emotion/styled";

export const List = styled.ul`
  outline: 1px solid tomato;
  max-width: 600px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 13px;
  background-color: white;
  font-size: 20px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 0.4fr;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
