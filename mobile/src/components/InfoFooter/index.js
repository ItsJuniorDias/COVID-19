import React from 'react';
import { View } from 'react-native';

import { Container, Title, NumberCountry } from './styles';

const InfoFooter = ({ color, numberCountry, title }) => {
  return (
    <Container style={{ backgroundColor: `${color}` }}>
      <Title>{title}</Title>
      <NumberCountry>{numberCountry}</NumberCountry>
    </Container>
  );
};

export default InfoFooter;
