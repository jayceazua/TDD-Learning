const chai = require('chai');
const expect = chai.expect;
const { Item,  ShoppingCart } = require('../shoppingCart')

it('Should create a new item with name and price', () => {
    let new_item = new Item('apple', 0.99);
    expect(new_item.name).to.equal('apple');
    expect(new_item.price).to.equal(0.99);
});

it('Should return an array containing all items in cart', () => {
    // what do you mean "return" an array?
    let new_item_1 = new Item('apple', 0.99);
    let new_item_2 = new Item('orange', 0.79);
    let new_item_3 = new Item('pineapple', 1.99);
    let shoppingCart = new ShoppingCart();
    shoppingCart.addItem = new_item_1
    shoppingCart.addItem = new_item_2
    shoppingCart.addItem = new_item_3
    expect(shoppingCart.cart).to.be.a('array');
    expect(shoppingCart.cart.length).to.equal(3);
});

it('Should add a new item to the shopping cart', () => {
    let add_item = new Item('Naked Fruit Juice', 5.99);
    let shoppingCart = new ShoppingCart();
    shoppingCart.addItem = add_item
    expect(shoppingCart.cart.length).to.equal(1);
});

it('Should return the number of items in the cart', () => {
    // you mention shopping and cart as if they are different.
    let new_item_1 = new Item('apple', 0.99);
    let new_item_2 = new Item('orange', 0.79);
    let new_item_3 = new Item('pineapple', 1.99);
    let shoppingCart = new ShoppingCart();
    shoppingCart.addItem = new_item_1;
    shoppingCart.addItem = new_item_2;
    shoppingCart.addItem = new_item_3;
    expect(shoppingCart.howManyItems).to.equal(3)
});

it('Should remove items from cart', () => {
    // Do not understand if remove all or just one item.
    let new_item_1 = new Item('apple', 0.99);
    let new_item_2 = new Item('orange', 0.79);
    let new_item_3 = new Item('pineapple', 1.99);
    let shoppingCart = new ShoppingCart();
    shoppingCart.remove
    expect(shoppingCart.howManyItems).to.equal(0)
});

// Stretch challenges
it('Should update the count of items in the cart', () => {

});

it('Should remove an item when its count is 0', () => {

});

it('Should return the total cost of all items in the cart', () => {

});
