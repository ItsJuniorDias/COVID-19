import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -90px;
  padding: 0 30px;
`;

export const ImageLogo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'NunitoSans-SemiBold';
  margin-top: 25px;
`;

export const TextSignUp = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const TextLink = styled.Text`
  color: #fff;

  font-family: 'NunitoSans-SemiBold';
  font-size: 16px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-top: 5px;
`;
