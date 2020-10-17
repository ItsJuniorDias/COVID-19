import React from 'react';
import { StatusBar } from 'react-native';

import { Container, ImageLogo, Title } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const SignIn = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0028bd" />
      <Container>
        <ImageLogo source={logoImg} />

        <Title>Faça seu Login</Title>

        <Input />
        <Input />
        <Button>Entrar</Button>
      </Container>
    </>
  );
};

export default SignIn;
