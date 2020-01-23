import cart from '../Shopping-Cart/albumsArray.js';

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
    let orderAmount;
    //the album
    for (let i = 0; i < albumsArray.length ; i++) {
        let album = albumsArray[i];
    };


    
    //the cart item
    for (let j = 0; j < cart.length; j++) {
        let cartItem = cart[j];
    }
    if (album === cartItem) {
        
    //call that the line order ... turn that to money
        let purchaseItem = toUSD(album.price, cartItem.quantity);
    }
    //match that with the cart item
    orderAmount = orderAmount + purchaseItem;
    //add that to orderAmount
    return orderAmount;

};

    
