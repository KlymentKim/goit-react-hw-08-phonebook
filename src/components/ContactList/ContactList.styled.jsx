import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 15px 10px -15px #111;   
  background-color: #f5f5f5;
   margin: 0 auto;
`;

export const Item = styled.li`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px 8px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #b9bcd3;
    color: #171718;
  }
`;
