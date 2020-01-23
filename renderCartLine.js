
export default const renderCartItem = (cartItem, album) => {
    const tableBody = document.createElement('tbody');

    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const nameCell = document.createElement('td');
    nameCell.textContent = album.name;
    tableRow.appendChild('nameCell');

    const priceCell = document.createElement('td');
    priceCell.textContent = album.price;
    tableRow.appendChild('priceCell');

    const quantityCell = document.createElement('td');
    quantityCell.textContent = cartItem.quantity;
    tableRow.appendChild('quantityCell');

    const totalCell = document.createElement('td');
    totalCell.textContent = album.price * cartItem.quantity;
    tableRow.appendChild('totalCell');

    return tableRow;
}