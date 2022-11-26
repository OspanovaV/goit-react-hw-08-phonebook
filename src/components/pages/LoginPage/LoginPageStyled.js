// import styled from '@emotion/styled';
import styled from 'styled-components';

export const LoginForm = styled.form`
flex-direction: column;
 height: 120px;
 padding: 10px;
 margin-bottom: 40px;
 display: flex;  
`;

export const LogWrapper = styled.div`
  height: 400px;
  padding: 20px; 
  border: 1px solid black;
  border-radius: 4px;
  background-color: #ff7a05;
 
`;

export const LogTitle = styled.h1`
  margin-bottom: 6px;
  font-size: 28px;
  text-align: center;
`;

export const ErrorText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
  color: white;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;  
  font-weight: 500px;
  font-size: 16px;
  line-height: 1.16;
  letter-spacing: 0.01em; 
`;

export const FormInput = styled.input`
  display:block;
  margin: 0;
  padding: 10px 42px;
  font: inherit;
  font-size: 18px;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgba(45,18,18,.2);
  color: #ff7a05; 
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  width: 200px; 
  background-color: black;
  border-radius: 4px;
  color: white;
`;
