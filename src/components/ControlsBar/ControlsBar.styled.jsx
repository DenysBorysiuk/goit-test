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

export const Filter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #ebd8ff;
  background-color: #5735a3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  will-change: transform;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
