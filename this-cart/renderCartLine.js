import { toUSD } from '../utils.js';

export function renderCartLine (album, cartItem) {
    const tableBody = document.createElement('tbody');

    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = album.name;
    tableRow.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(album.price);
    tableRow.appendChild(priceCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = cartItem.quantity;
    tableRow.appendChild(quantityCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = album.price * cartItem.quantity;
    totalCell.textContent = toUSD(total);
    tableRow.appendChild(totalCell);

    return tableRow;
}