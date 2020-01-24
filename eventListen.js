
button.addEventListener('click', function() {
    addToStorageCart(buttonItem)
});   


export function addToStorage(button.value) {
  const buttonItem = button.value
  //seeing if we can get the cart (i.e., if cart exists)
  if (!isCart()) {
    // if we can't get, we set
      initializeCart();
  }
  //parsing already existent cart and assigning to CART
  const CART = getCartFromStorage();
  
  //seeing if buttonItem is in Cart
  if (!findById (CART, buttonItem)) {
        //if no, uses for to create new item line
        addNewItem(CART, buttonItem)
      }
    else {
        //if so, increments by given quantity
        addItemToCart(CART, buttonItem)
      }
    tellUserItemAdded(buttonItem);
    //hollers at user to them about addition
    updateLocalStorage(CART);
    //sets buttonItem in cart

}

export function isCart() {
  if (localStorage.getItem('cart')){
      return true;
  }
  else {
      return false;
  }
};

export function initializerCart(){

};

export function getCartFromStorage(){

};

export function addNewItem(){

};

export function addItemToCart(){

};

export function announceAdded(){

};

export function updateLocalStorage(){

};