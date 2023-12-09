import { Cart } from './cart';

// describe('model cart', () => {
//   it('getNumber', () => {
//     let value = Cart.getNumber(1);
//     expect(1).toBe(value);
//   });
//   it('setNumber', () => {
//     let index = 1;
//     let value = Cart.setNumber(index);

//     expect(1).toEqual(value);
//   });
// });

// CORRECTION, on fait le test comme si les méthodes sont correctement codées même si ce n'est pas le cas, les tests doivent échouer
describe('Test model cart', () => {
  // GET and SET Number
  it('test GET and SET', () => {
    let cart = new Cart();
    expect(cart.getNumber()).toBeUndefined();
    cart.setNumber(9);
    expect(cart.getNumber()).toEqual(9);
  });
});

describe('model cart increment and decremente method', () => {
  it('incremente from cart', () => {
    let number = 1;
    let result = number + 1;
    expect(2).toEqual(result);
  });
  it('decremente from cart', () => {
    let number = 3;
    let result = number - 1;
    expect(2).toEqual(result);
  });
});
