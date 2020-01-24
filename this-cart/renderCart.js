import { albumsArray, cart } from '../albumsArray.js';
import { renderCartLine } from './renderCartLine.js';
import { findById, toUSD, calcLineItem, calcOrderTotal } from '../utils.js';


const tableBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const album = findById(albumsArray, cartItem.id);
    const itemRendered = renderCartLine(cartItem, album);
    tableBody.appendChild('itemRendered');  
}


const amountTotal = calcLineItem(cart, albumsArray);
orderTotalCell.textContent = toUSD(amountTotal);
