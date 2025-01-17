import styled from 'styled-components/native';

export const Section = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 0px;
  justify-content: space-between;
`;
export const BtnContainer = styled.View`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
`;
export const Pagination = styled.Pressable`
  margin: 0 auto;
  margin-top: 20px;
  background-color: transparent;
  border: 2px solid ${({theme}) => theme.text};
  color: ${({theme}) => theme.text};
  align-self: center;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding:15px 20px
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.text};
`;

export const Loader = styled.ActivityIndicator`
  margin-top: 60px;
`;