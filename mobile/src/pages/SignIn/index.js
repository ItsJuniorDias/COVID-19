import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import {
  Container,
  ImageLogo,
  Title,
  TextSignUp,
  TextLink,
  Form,
  FormInput,
} from './styles';

import Button from '../../components/Button';
import Background from '../../components/Background';

import logoImg from '../../assets/logo.png';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);

      console.log(user);

      navigation.navigate('Home');
    } catch (err) {
      Alert.alert(
        'Falha na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais'
      );
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#021B79" />
      <Background>
        <Container>
          <ImageLogo source={logoImg} />

          <Title>Faça seu Login</Title>

          <Form>
            <FormInput
              autoCapitalize="none"
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              placeholder="Digite seu email"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />

            <FormInput
              icon="lock-outline"
              autoCompleteType="password"
              placeholder="Digite sua senha"
              secureTextEntry
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </Form>

          <Button onPress={handleSubmit}>Entrar</Button>

          <TextSignUp onPress={() => navigation.navigate('SignUp')}>
            <TextLink>Crie sua conta</TextLink>
          </TextSignUp>
        </Container>
      </Background>
    </>
  );
};

export default SignIn;
