function renderAlbum(album) {

    const li = document.createElement('li');
    li.className = album.category;
    li.title = album.description;

    
    const h3 = document.createElement('h3');
    h3.textContent = album.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = album.image;
    img.alt = album.id;
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    const usd = '$' + album.price.toFixed(2);
    p.textContent = usd;
    li.appendChild(p);

    const button = document.createElement('button');
    button.value = album.id;
    button.textContent = 'Buy';
    li.appendChild(button);
    
    return li;
}


export default renderAlbum;
 



