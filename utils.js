import { cart , albumsArray } from '../Shopping-Cart/albumsArray.js';

export function findById(someId, someArray) {
    for (let i = 0 ; i < someArray.length ; i++) {
        const item = someArray[i];
        if (someId === item.id) {
            return item;
        }
    }
};

export function calcLineItem(quantity, price) {
    let product = quantity * price;
    let total = Math.round(product * 100) / 100;
    return total;
}

export const toUSD = (number) => {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export function calcOrderTotal(albumsArray, cart) {
    let orderAmount = toUSD(orderAmount);
    for (let i = 0; i < cart.length ; i++) {
        let cartItem = cart[i];
        let purchaseItem = findById(cartItem.id, albumsArray);
        let lineTotal = calcLineItem(purchaseItem.price, cartItem.quantity);
        orderAmount = lineTotal + orderAmount;
        return orderAmount; 
    }
}

    
