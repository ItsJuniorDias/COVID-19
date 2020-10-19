import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { Picker } from '@react-native-community/picker';

import Input from '../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background-color: #0028bd;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
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

export const ContainerOptions = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const InputOptions = styled(Picker).attrs({
  placeholderTextColor: 'rgba(255,255,255, 0.8)',
})`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'NunitoSans-Regular';
  margin-left: 5px;
`;
