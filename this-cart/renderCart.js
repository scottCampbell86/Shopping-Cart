import { albumsArray } from '../albumsArray.js';
import { renderCartLine } from './renderCartLine.js';
import { findById, toUSD, calcOrderTotal } from '../utils.js';


const tableBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const itemsFromStorage = localStorage.getItem('cart');
const placeOrderButton = document.getElementById('place-order-button');

let cart;
if (itemsFromStorage) {
    cart = JSON.parse(itemsFromStorage);
} else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    let album = findById(cartItem.id, albumsArray);
    const albumMatch = renderCartLine(album, cartItem);
    tableBody.appendChild(albumMatch);
}


const amountTotal = calcOrderTotal(albumsArray, cart);
orderTotalCell.textContent = toUSD(amountTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        localStorage.removeItem('cart'); 
        window.location = '../';  
    });
}
