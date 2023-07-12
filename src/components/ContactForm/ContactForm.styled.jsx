import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #4323d4;
  border-radius: 4px;
  background-color: transparent;
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  /* color: #ebe8e8; */
  font-size: 20px;
  background-color: color: #ebe8e8;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border: 3px solid #4323d4;
  background-color: transparent;
  color: #ebe8e8;
 
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #4323d4;
  color: #0c0b0b;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 1s ease-out;
  color:  #ebe8e8;
  background-color: transparent;

  &:hover, &:focus{
    background-color: rgba(7, 134, 219, 0.6);
  }
  `;
