import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPriceTemp } from '../../util/format';

import {
  Container,
  Product,
  ListProducts,
  Preview,
  Title,
  Content,
  Price,
  ButtonCart,
  Count,
  ButtonCartText,
  AmountText,
  AreaTextButton,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPriceTemp(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ScrollView horizontal>
          <ListProducts>
            {products.map(product => (
              <Product key={String(product.id)}>
                <Preview source={{ uri: product.image }} />
                <Content>
                  <View>
                    <Title>{product.title}</Title>
                    <Price>{product.priceFormatted}</Price>
                  </View>
                  <ButtonCart onPress={() => this.handleAddProduct(product)}>
                    <Count>
                      <Icon name="add-shopping-cart" color="#FFF" size={15} />
                      <AmountText>{amount[product.id] || 0}</AmountText>
                    </Count>
                    <AreaTextButton>
                      <ButtonCartText>Adicionar</ButtonCartText>
                    </AreaTextButton>
                  </ButtonCart>
                </Content>
              </Product>
            ))}
          </ListProducts>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
