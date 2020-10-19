import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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
import Background from '../../components/Background';

import logoImg from '../../assets/logo.png';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    async function loadCountry() {
      const response = await api.get('help/countries');

      setCountry(response.data);

      console.tron.log(response.data);
    }

    loadCountry();
  }, []);

  const handleSubmit = async () => {
    if (name && email && password && selectedCountry !== null) {
      try {
        const createUser = await firestore()
          .collection('users')
          .add({ name, email, password, selectedCountry });

        await auth().createUserWithEmailAndPassword(email, password);

        console.tron.log(createUser);

        Alert.alert(
          'Cadastro realizado com sucesso',
          'E um prazer ter você aqui.'
        );

        navigation.navigate('Home');
      } catch (err) {
        Alert.alert(
          'Falha no cadastro',
          'Ocorreu um erro ao fazer o cadastro, tente outras credenciais'
        );
      }
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
                selectedValue={selectedCountry}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCountry(itemValue)
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
      </Background>
    </>
  );
};

export default SignUp;
