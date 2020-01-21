// export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });

export const formatPriceTemp = price => {
  return `R$ ${price.toFixed(2)}`;
};
