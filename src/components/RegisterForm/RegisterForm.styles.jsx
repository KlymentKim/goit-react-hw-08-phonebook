import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 15px 10px -15px #111;   
  background-color: #f5f5f5;
  border-radius: 4px;
  margin: 0 auto;
 `;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color:  #111;
  font-size: 20px;
`;

export const Input = styled.input`
  color: #000007;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  opacity: 0.7;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #b9bcd3;
    color: #171718;
  }
`;
