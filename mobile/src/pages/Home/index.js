import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ButtonInfo from '../../components/ButtonInfo';
import InfoCountry from '../../components/InfoCountry';

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
} from './styles';

const Home = () => {
  return (
    <>
      <ContainerHeader>
        <ContainerTitle>
          <TitleName>Alexandre Jr</TitleName>
          <TouchableOpacity>
            <Icon name="exit-to-app" size={30} color="#f4ede8" />
          </TouchableOpacity>
        </ContainerTitle>

        <ContainerTextInfo>
          <TitleInfo>Você está se sentindo doente?</TitleInfo>

          <TextDescriptionInfo>
            Se você se sentir doente com algum dos sintomas de covid-19, ligue
            ou envie um SMS imediatamente para obter ajuda.
          </TextDescriptionInfo>

          <ContainerButtonInfo>
            <ButtonInfo icon="call" text="Ligar Agora" color="#f40555" />
            <ButtonInfo icon="message" text="Envie um SMS" color="#4DB5FF" />
          </ContainerButtonInfo>
        </ContainerTextInfo>
      </ContainerHeader>

      <Body>
        <HeaderInfos>
          <InfoCountry
            color="#FFB259"
            title="Afetados"
            numberCountry="336,851"
          />
          <InfoCountry color="#FF5959" title="Mortes" numberCountry="9,620" />
        </HeaderInfos>
      </Body>
    </>
  );
};

export default Home;
