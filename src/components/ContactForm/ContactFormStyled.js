import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  padding: 10px;
  margin-bottom: 40px;
  outline: 1px solid black;
  border-radius: 5%; 
`;

export const Label = styled.label`
  margin-bottom: 10px;  
  font-weight: 500;
  font-size: 25px;
`;

export const Input = styled.input`
  display:block;
margin-bottom: 20px;
  height: 32px;
  font-size: 16px;
  letter-spacing: 0.05em;
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  cursor: pointer;
  background-color: wight;
  border-radius: 5%;
  color: black;
`;
