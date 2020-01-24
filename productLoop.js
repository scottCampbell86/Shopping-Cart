import renderAlbum from './renderAlbum.js';
import { albumsArray } from './albumsArray.js';

const inStock = document.getElementById('in-stock');

for (let i = 0; i < albumsArray.length; i++) {
    const album = albumsArray[i];
    const indexAlbum = renderAlbum(album);
    inStock.appendChild(indexAlbum);
    
}

