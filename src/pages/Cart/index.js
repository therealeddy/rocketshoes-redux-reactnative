import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import {
  Container,
  CartView,
  Product,
  TopProduct,
  ImageProduct,
  DescriptionProduct,
  TitleProduct,
  PriceProduct,
  ButtonDelete,
  BottomProduct,
  Quantity,
  InputNumber,
  PriceCountProduct,
  Total,
  TitleTotal,
  PriceTotal,
  ButtonFinish,
  ButtonFinishText,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <CartView>
          {products.map(item => (
            <Product key={String(item.id)}>
              <TopProduct>
                <ImageProduct
                  source={{
                    uri: item.image,
                  }}
                />
                <DescriptionProduct>
                  <TitleProduct>{item.title}</TitleProduct>
                  <PriceProduct>R$ {item.price}</PriceProduct>
                </DescriptionProduct>
                <ButtonDelete>
                  <Icon name="delete-forever" color="#7159C1" size={25} />
                </ButtonDelete>
              </TopProduct>
              <BottomProduct>
                <Quantity>
                  <RectButton>
                    <Icon
                      name="remove-circle-outline"
                      color="#7159C1"
                      size={18}
                    />
                  </RectButton>
                  <InputNumber editable={false} value={String(0)} />
                  <RectButton>
                    <Icon name="add-circle-outline" color="#7159C1" size={18} />
                  </RectButton>
                </Quantity>
                <PriceCountProduct>R$ 250,90</PriceCountProduct>
              </BottomProduct>
            </Product>
          ))}
          <Total>
            <TitleTotal>Total</TitleTotal>
            <PriceTotal>R$ 1619,10</PriceTotal>
          </Total>
          <ButtonFinish>
            <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
          </ButtonFinish>
        </CartView>
      </Container>
    );
  }
}
