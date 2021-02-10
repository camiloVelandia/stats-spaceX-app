import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  width:100%;
  position: relative;
  background-color: ${({theme}) => theme.body};
`;
