import React from 'react';
import { StatusBar } from 'react-native';

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

import logoImg from '../../assets/logo.png';

const SignIn = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0028bd" />
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
          />

          <FormInput
            icon="lock-outline"
            autoCompleteType="password"
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </Form>

        <Button>Entrar</Button>

        <TextSignUp onPress={() => navigation.navigate('SignUp')}>
          <TextLink>Crie sua conta</TextLink>
        </TextSignUp>
      </Container>
    </>
  );
};

export default SignIn;
