import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPriceTemp } from '../../util/format';

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

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <CartView>
        {cart.map(product => (
          <Product key={String(product.id)}>
            <TopProduct>
              <ImageProduct
                source={{
                  uri: product.image,
                }}
              />
              <DescriptionProduct>
                <TitleProduct>{product.title}</TitleProduct>
                <PriceProduct>{product.priceFormatted}</PriceProduct>
              </DescriptionProduct>
              <ButtonDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" color="#7159C1" size={25} />
              </ButtonDelete>
            </TopProduct>
            <BottomProduct>
              <Quantity>
                <RectButton onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159C1"
                    size={18}
                  />
                </RectButton>
                <InputNumber editable={false} value={String(product.amount)} />
                <RectButton onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" color="#7159C1" size={18} />
                </RectButton>
              </Quantity>
              <PriceCountProduct>{product.subtotal}</PriceCountProduct>
            </BottomProduct>
          </Product>
        ))}
        <Total>
          <TitleTotal>Total</TitleTotal>
          <PriceTotal>{total}</PriceTotal>
        </Total>
        <ButtonFinish>
          <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
        </ButtonFinish>
      </CartView>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPriceTemp(product.price * product.amount),
  })),
  total: formatPriceTemp(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
