import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

const Button = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? <ActivityIndicator /> : <ButtonText>{children}</ButtonText>}
    </Container>
  );
};

export default Button;
