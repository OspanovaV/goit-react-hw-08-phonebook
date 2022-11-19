// import styled from 'styled-components';

// export const Form = styled.form`
//   max-width: 360px;
//   border-radius: 5px;
//   padding: 10px;
//   background-color: #1ab5ee;
   
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// `;

// export const Input = styled.input`
//   width: 200px;
//   margin-top: 2px;
// `;

// export const Button = styled.button`
 
// `;

import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  padding: 10px;
  margin-bottom: 40px;
  outline: 1px solid black;
  border-radius: 10%;
  /* justify-content: center; */
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 30px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  height: 32px;
  font-size: 16px;
  letter-spacing: 0.05em;
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  cursor: pointer;
  background-color: black;
  border-radius: 10%;
  color: white;
`;
