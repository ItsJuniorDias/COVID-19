import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TextButton } from './styles';

const ButtonInfo = ({ icon, text, color }) => {
  return (
    <Container style={{ backgroundColor: `${color}` }}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TextButton>{text}</TextButton>
    </Container>
  );
};

export default ButtonInfo;
