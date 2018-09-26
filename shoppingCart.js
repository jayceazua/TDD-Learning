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
});

class ShoppingCart {
    constructor() {
        this.cart = []
    };
    set addItem(Item) {
        this.cart.push(Item);
    };
    get howManyItems() {
        return this.cart.length
    };
    get remove() {
        return this.cart = []

    };
    get totalQty() {};
    get totalCost() {}
}

module.exports = {
    Item,
    ShoppingCart
}
