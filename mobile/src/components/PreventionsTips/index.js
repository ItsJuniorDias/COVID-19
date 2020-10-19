import React from 'react';
import { View } from 'react-native';

import { Container, TitleDescription, ImageTips } from './styles';

const PreventionsTips = ({ image, description }) => {
  return (
    <Container>
      <ImageTips source={{ uri: `${image}` }} />
      <TitleDescription>{description}</TitleDescription>
    </Container>
  );
};

export default PreventionsTips;
