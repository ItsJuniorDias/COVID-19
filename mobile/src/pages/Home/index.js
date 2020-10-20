/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import api from '../../services/api';

import ButtonInfo from '../../components/ButtonInfo';
import InfoCountry from '../../components/InfoCountry';
import InfoFooter from '../../components/InfoFooter';

import PreventionsTips from '../../components/PreventionsTips';

import distance from '../../assets/distance.png';
import water from '../../assets/water_hand.png';
import group from '../../assets/group.png';
import teste from '../../assets/teste.png';

import {
  ContainerHeader,
  Body,
  TitleName,
  ContainerTextInfo,
  ContainerTitle,
  TitleInfo,
  TextDescriptionInfo,
  ContainerButtonInfo,
  HeaderInfos,
  Content,
  Prevention,
  PreventionTitle,
  ContentTips,
  ContainerTest,
  TitleTest,
  TitleDescription,
} from './styles';

const Home = ({ navigation, route }) => {
  const { userProvider, userSignUp } = route.params;

  const [cases, setCases] = useState([]);
  const [user, setUser] = useState({});

  console.tron.log(userSignUp);

  useEffect(() => {
    async function loadUser() {
      if (userSignUp !== null) {
        const userDoc = userSignUp._documentPath._parts[1];

        const responseUser = await firestore()
          .collection('users')
          .doc(userDoc)
          .get();

        console.tron.log(responseUser);

        setUser(responseUser._data);
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    async function loadInfoCountry() {
      const { selectedCountry } = user;

      console.tron.log(selectedCountry);

      const response = await api.get('country', {
        params: { name: `${selectedCountry}` },
      });

      setCases(response.data);

      console.tron.log(response);
    }

    loadInfoCountry();
  }, []);

  const handleSignOut = async () => {
    await auth()
      .signOut()
      .then(() => console.log('User signed out!'));

    navigation.navigate('SignIn');
  };

  return (
    <>
      <Content>
        <ScrollView>
          <ContainerHeader>
            <ContainerTitle>
              {userProvider ? (
                <TitleName>{userProvider.displayName}</TitleName>
              ) : (
                  <TitleName>{user.name}</TitleName>
                )}

              <TouchableOpacity onPress={handleSignOut}>
                <Icon name="exit-to-app" size={30} color="#f4ede8" />
              </TouchableOpacity>
            </ContainerTitle>

            <ContainerTextInfo>
              <TitleInfo>Você está se sentindo doente?</TitleInfo>

              <TextDescriptionInfo>
                Se você se sentir doente com algum dos sintomas de covid-19,
                ligue ou envie um SMS imediatamente para obter ajuda.
              </TextDescriptionInfo>

              <ContainerButtonInfo>
                <ButtonInfo icon="call" text="Ligar Agora" color="#f40555" />
                <ButtonInfo
                  icon="message"
                  text="Envie um SMS"
                  color="#4DB5FF"
                />
              </ContainerButtonInfo>
            </ContainerTextInfo>
          </ContainerHeader>

          <Body>
            <HeaderInfos>
              {cases.map((item, index) => (
                <>
                  <InfoCountry
                    color="#FFB259"
                    title="Afetados"
                    numberCountry={item.confirmed}
                    key={index}
                  />
                  <InfoCountry
                    color="#FF5959"
                    title="Mortes"
                    numberCountry={item.deaths}
                    key={index}
                  />
                </>
              ))}
            </HeaderInfos>

            <HeaderInfos>
              {cases.map((item, index) => (
                <>
                  <InfoFooter
                    color="#4CD97B"
                    title="Curados"
                    numberCountry={item.recovered}
                    key={index}
                  />
                  <InfoFooter
                    color="#4DB5FF"
                    title="Ativos"
                    numberCountry="301,251"
                    key={index}
                  />
                  <InfoFooter
                    color="#9059FF"
                    title="Graves"
                    numberCountry={item.critical}
                    key={index}
                  />
                </>
              ))}
            </HeaderInfos>

            <Prevention>
              <PreventionTitle>Prevenções</PreventionTitle>

              <ContentTips>
                <PreventionsTips
                  description="Evite contato próximo"
                  image={distance}
                />
                <PreventionsTips description="Lave bem as mãos" image={water} />
                <PreventionsTips
                  description="Use uma máscara facial"
                  image={group}
                />
              </ContentTips>
            </Prevention>

            <ContainerTest resizeMode="contain" source={teste}>
              <TitleTest>Faça seu próprio teste!</TitleTest>
              <TitleDescription>
                Siga as instruções para fazer seu próprio teste.
              </TitleDescription>
            </ContainerTest>
          </Body>
        </ScrollView>
      </Content>
    </>
  );
};

export default Home;
