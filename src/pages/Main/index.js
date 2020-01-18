import React, { Component } from 'react';

import { ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

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
  AreaTextButton
} from './styles';

export default class Main extends Component {
  state = {
    product: []
  }

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <Container>
        <ScrollView horizontal>
          <ListProducts>
            {product.map(item => (
              <Product key={String(item.id)}>
                <Preview source={{ uri: item.image }} />
                <Content>
                  <View>
                    <Title>{ item.title }</Title>
                    <Price>{ item.price }</Price>
                  </View>
                  <ButtonCart>
                    <Count>
                      <Icon name="add-shopping-cart" color="#FFF" size={15} />
                      <AmountText>0</AmountText>
                    </Count>
                    <AreaTextButton>
                      <ButtonCartText>
                        Adicionar
                      </ButtonCartText>
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
