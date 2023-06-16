import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;
export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5735a3;
  background-color: transparent;
  border: none;
  cursor: pointer;
  will-change: transform;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
