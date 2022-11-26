import styled from 'styled-components';
// import styled from '@emotion/styled';

export const MenuWrapper = styled.div`  
  display: flex;
  gap: 10px;
  color: #ff7a05;
  text-align: right;
  &:last-child {
    margin-right: 10px;
  }
`;

export const MenuButton = styled.button`
  display: block;
  background-color: #ff7a05;
  margin: 0 auto;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 16px;
`;
