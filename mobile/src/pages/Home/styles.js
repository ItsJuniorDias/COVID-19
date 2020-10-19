import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ['#021B79', '#0575E6'],
})`
  flex: 1.1;
  padding: 15px 30px;
  flex-direction: column;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const Content = styled.View`
  background-color: #e5e5e5;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Body = styled.View`
  flex: 2;
  padding: 20px 30px;
`;

export const HeaderInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleName = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'NunitoSans-SemiBold';
`;

export const TitleInfo = styled.Text`
  font-size: 18px;
  color: #f4ede8;
  font-family: 'NunitoSans-SemiBold';
`;

export const ContainerTextInfo = styled.View`
  flex: 1;
  margin-top: 25px;
`;

export const TextDescriptionInfo = styled.Text`
  font-size: 14px;
  color: #f4ede8;
  font-family: 'NunitoSans-Regular';
  margin-top: 12px;
`;

export const ContainerButtonInfo = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: space-between;
`;

export const Prevention = styled.View``;

export const PreventionTitle = styled.Text`
  font-size: 20px;
  color: #021b79;
  font-family: 'NunitoSans-SemiBold';
  margin-top: 12px;
`;
