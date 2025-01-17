import styled from 'styled-components/native';

export const Section = styled.View`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid  ${({theme}) => theme.text};
  text-align: center;
 
`;
export const Title = styled.Text`
  background-color: ${({theme}) => theme.text};
  color: ${({theme}) => theme.body};
  padding: 20px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`;
export const Figure = styled.Image`
  width: 228px;
  height: 218px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
 
`;
export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 30px;
  text-transform: uppercase;
  padding: 0 20px;
  margin: 0;
  margin-top: 40px;
  color:  ${({theme}) => theme.text};
`;
export const Text = styled.Text`
  padding: 20px 20px;
  text-align: justify;
  padding-bottom: 30px;
  margin: 0;
  color:  ${({theme}) => theme.text};
`;
export const Info = styled.View`
  padding: 0 20px;
  padding-bottom: 20px;
  justify-content: space-around;
`;
export const Bullet = styled.View`
  flex-direction:row;
`;
export const BulletText = styled.Text`
  margin: 0;
  text-align: left;
  text-transform: uppercase;
  color:  ${({theme}) => theme.text};
`;
