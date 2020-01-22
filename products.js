import renderAlbum from './renderAlbum.js';
import albums from './albums.js';

const inStock = document.getElementById('in-stock');

for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    const indexAlbum = renderAlbum(album);
    inStock.appendChild(indexAlbum);

}