import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Logo, ButtonBasket, ButtonLogo, Count
} from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <ButtonLogo onPress={() => navigation.navigate('Main')}>
        <Logo />
      </ButtonLogo>
      <ButtonBasket onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Count>0</Count>
      </ButtonBasket>
    </Container>
  );
}
