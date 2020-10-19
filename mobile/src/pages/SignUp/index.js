import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

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

  const handleSubmit = async () => {
    try {
      const response = await firestore()
        .collection('users')
        .add({ name, email, password, selectedValue });

      console.tron.log(response);

      Alert.alert(
        'Cadastro realizado com sucesso',
        'Aguarde alguns instante...'
      );

      const redirect = () => {
        navigation.navigate('Home');
      };

      setInterval(redirect, 3000);
    } catch (err) {
      Alert.alert(
        'Falha no cadastro',
        'Ocorreu um erro ao fazer o cadastro, tente outras credenciais'
      );
    }
  };

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
                  value={item.name}
                  key={index}
                />
              ))}
            </InputOptions>
          </ContainerOptions>
        </Form>

        <Button onPress={handleSubmit}>Entrar</Button>

        <TextSignUp onPress={() => navigation.navigate('SignIn')}>
          <TextLink>Voltar</TextLink>
        </TextSignUp>
      </Container>
    </>
  );
};

export default SignUp;
