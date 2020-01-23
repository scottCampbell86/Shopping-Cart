import { cart , albums } from '../albumsArray.js.';
import { renderCartLine } from '../renderCartline.js';
import { findById, toUSD, calcLineItem };


const tableBody = document.getElementById('table-body');

for (let i = 0; i < cart.length; i++) {
  const cartItem = cart[i];
  const album = document.findById(albums[i]);
  const itemRendered = renderCartItem(cartItem, album);
  tableBody.appendChild('itemRendered');  
}


const amountTotal = calcAmountTotal(cart, fruits);
orderTotalCell.textContent = toUSD(amountTotal);
