import styled from '@emotion/styled';

export const Container = styled.div`

  min-height: 200px;
  display: grid;
  align-items: center;
  margin: 0 auto;  
  width: 600px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
             23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
 
`;

export const Wrapper = styled.div`
  background-color: #edb562e8; 
  padding-top: 130px; 
  padding-bottom: 50px;
`;

export const Footer = styled.footer`
  color: white;
  padding: 20px;
  text-align: center;
  background-color: #ff7a05;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
             23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;