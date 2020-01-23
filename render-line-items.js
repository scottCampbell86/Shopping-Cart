
export default const renderCartItem = (cartItem, storeItem) => {
    tableBody = document.getElementById('tableBody');

    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const nameCell = document.createElement('td');
    nameCell.textContent = storeItem.name;
    tableRow.appendChild('nameCell');

    const priceCell = document.createElement('td');
    priceCell.textContent = storeItem.price;
    tableRow.appendChild('priceCell');

    const quantityCell = document.createElement('td');
    quantityCell.textContent = cartItem.quantity;
    tableRow.appendChild('quantityCell');

    const totalCell = document.createElement('td');
    totalCell.textContent = storeItem.price * cartItem.quantity;
    tableRow.appendChild('totalCell');

  //const footerRow = document.createElement//('tfoot');
    return tableRow;
}