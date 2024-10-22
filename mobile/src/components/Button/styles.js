import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #f40555;
  border-radius: 10px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  color: #f4ede8;
  font-size: 18px;
`;
