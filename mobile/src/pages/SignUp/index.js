import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import api from '../../services/api';

import {
  Container,
  ImageLogo,
  Title,
  TextSignUp,
  TextLink,
  Form,
  FormInput,
  ContainerOptions,
  InputOptions,
} from './styles';

import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    async function loadCountry() {
      const response = await api.get('help/countries');

      setCountry(response.data);

      console.tron.log(response.data);
    }

    loadCountry();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0028bd" />
      <Container>
        <ImageLogo source={logoImg} />

        <Title>Faça seu Login</Title>

        <Form>
          <FormInput
            autoCapitalize="none"
            icon="face"
            autoCorrect={false}
            value={name}
            onChangeText={(name) => setName(name)}
            placeholder="Nome completo"
          />
          <FormInput
            autoCapitalize="none"
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            value={email}
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            placeholder="Digite seu email"
          />

          <FormInput
            icon="lock-outline"
            autoCompleteType="password"
            placeholder="Digite sua senha"
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
          />

          <ContainerOptions>
            <InputOptions
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <InputOptions.Item label="Selecione seu país" value="" />
              {country.map((item, index) => (
                <InputOptions.Item
                  label={item.name}
                  value={index}
                  key={index}
                />
              ))}
            </InputOptions>
          </ContainerOptions>
        </Form>

        <Button>Entrar</Button>

        <TextSignUp onPress={() => navigation.navigate('SignIn')}>
          <TextLink>Voltar</TextLink>
        </TextSignUp>
      </Container>
    </>
  );
};

export default SignUp;
