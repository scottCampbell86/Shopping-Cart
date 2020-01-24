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

export function toUSD(number){
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};


export function calcOrderTotal(albumsArray, cart) {
    let orderAmount = 0;
    for (let i = 0; i < cart.length ; i++) {
        let cartItemId = cart[i].id;
        console.log(cartItemId);
        let purchaseItem = findById(cartItemId, albumsArray);
        console.log(purchaseItem.price);
        console.log(cartItemId.quantity);
        let lineTotal = calcLineItem(purchaseItem.price, cart[i].quantity);
        orderAmount = lineTotal + orderAmount;   
    }
    return orderAmount;
}


    
