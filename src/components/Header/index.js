import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, ButtonBasket, ButtonLogo, Count } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <ButtonLogo onPress={() => navigation.navigate('Main')}>
        <Logo />
      </ButtonLogo>
      <ButtonBasket onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Count cartSize={cartSize}>{cartSize}</Count>
      </ButtonBasket>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
