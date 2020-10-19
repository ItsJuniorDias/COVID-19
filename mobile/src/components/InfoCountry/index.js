import React from 'react';
import { View } from 'react-native';

import { Container, Title, NumberCountry } from './styles';

const InfoCountry = ({ color, numberCountry, title }) => {
  return (
    <Container style={{ backgroundColor: `${color}` }}>
      <Title>{title}</Title>

      <NumberCountry>{numberCountry}</NumberCountry>
    </Container>
  );
};

export default InfoCountry;
