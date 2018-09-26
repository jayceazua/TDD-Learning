// create a object constructor for items
function Item (name, price) {
    // creating a new item.
    this.name = name;
    this.price = price;
    this.qty = 0;
    this.cost = 0
}
// increate qty
Object.defineProperty(Item, "increaseQty", {
    get: function() { this.qty += 1 }
});
// decrease qty
Object.defineProperty(Item, "decreaseQty", {
    get: function() { this.qty -= 1 }
});
// calculate total cost
Object.defineProperty(Item, "calcCost", {
    get: function() { return this.qty * this.price }
})

class ShoppingCart {
    constructor() {
        this.cart = []
    };

    set addItem(Item) {
        let cart = this.cart;
        cart.push(Item);
    }

    get howManyItems() {
        return this.cart.length
    }

    get remove() {
        return this.cart = []

    }
}
// create a shoppingCart class


    // removing an individual item
    // removing all items
    // return the amount of items total in the cart including the qty

module.exports = {
    Item,
    ShoppingCart
}
