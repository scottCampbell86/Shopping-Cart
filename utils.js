function findById(someId, someArray) {
    for (let i = 0 ; i < someArray.length ; i++) {
        const item = someArray[i];
        if (someId === item.id) {
            return item;
        }
    }
};

function calcLineItem(quantity, price) {
    let product = quantity * price;
    let total = Math.round(product * 100) / 100;
    return total;
}



export { findById, calcLineItem };