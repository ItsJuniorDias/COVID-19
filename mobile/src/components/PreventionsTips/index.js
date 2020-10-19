import React from 'react';
import { View } from 'react-native';

import { Container, ImageTips, Description } from './styles';

const PreventionsTips = ({ image, description }) => {
  return (
    <Container>
      <ImageTips source={image} />
      <Description>{description}</Description>
    </Container>
  );
};

export default PreventionsTips;
