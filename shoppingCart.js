// create a object constructor for items
function Item (name, price) {
    // creating a new item.
    this.name = name;
    this.price = price;
    this.qty = 0 + 1;
    this.cost = 0
}

class ShoppingCart {
    constructor() {
        this.cart = []
    };

    set addItem(_item) {
        const cart = this.cart;
        if (this._findItem()(_item)) {
            // could be refactored into a function
            cart.forEach((item) => {
                if(item.name === _item.name){
                    item.qty += 1
                }
            }); // <-- end of increasing
        }
        else {
            cart.push(_item)
        }
    };

    get howManyItems() {
        return this.cart.length
    };

    get removeAllItem() {
        return this.cart = []
    };

    _findItem() {
        const cart = this.cart;
        // closure function
        return function(_item) {
            for(let i = 0; i < cart.length; i += 1) {
                if (_item.name === cart[i].name) { return true }
            }
            return false
        }
    };
    removeItem(_item) {
        const cart = this.cart;
        if (this._findItem()(_item)) {
            // could be refactored into a function
            cart.forEach((item) => {
                if(item.name === _item.name){
                    item.qty -= 1
                    this._removeItemsWithZeroQty()
                }
            }); // <-- end of increasing
        }
        return
    }
    _removeItemsWithZeroQty() {
        const cart = this.cart;
        cart.forEach((item) => {
            if(item.qty === 0) {
                let itemToRemove = cart.indexOf(item)
                cart.splice(itemToRemove, 1);
                return;
            }
        })
    }
    get totalCost() {
        const cart = this.cart;
        let _totalCost = 0
        cart.forEach((item) => {
            _totalCost += (item.price * item.qty)
        })
        return _totalCost;
    }
}


// test to create _findItem getter
let new_item_1 = new Item('apple', 0.99);
let new_item_2 = new Item('orange', 0.79);
let new_item_3 = new Item('pineapple', 1.99);
let new_item_4 = new Item('orange', 0.79);
let shoppingCart = new ShoppingCart();
shoppingCart.addItem = new_item_1
shoppingCart.addItem = new_item_2
shoppingCart.addItem = new_item_3
shoppingCart.addItem = new_item_4

console.log(shoppingCart.cart)

module.exports = {
    Item,
    ShoppingCart
}
