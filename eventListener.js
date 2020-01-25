import { findById } from './utils.js';

export function isCart() {
    if (localStorage.getItem('cart')){
        return true;
    }
    else {
        return false;
    }
}

export function initializeCart(){
    localStorage.setItem('cart', JSON.stringify([]));
}

export function getCartFromStorage(){
    return JSON.parse(localStorage.getItem('cart'));
}

export function addNewItem(cart, cartItem){
    let cartOrder = {
        id: cartItem,
        quantity: 1
    };
    cart.push(cartOrder);
}

export function increaseThisItem(cart, cartItem){
    let currentItem = findById(cart, cartItem);
    currentItem.quantity += 1;
}

export function announceAdded(cartItem){  
  alert (`You added ${cartItem} to your cart.`);
}

export function updateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToStorage(cartItem) {

    if (!isCart()) {
        initializeCart();
    }
    const CART = getCartFromStorage();
    if (!findById (CART, cartItem)) {
        addNewItem(CART, cartItem);
    }
    else {
        increaseThisItem(CART, cartItem);
    }
    announceAdded(cartItem);
    updateLocalStorage(CART);
}