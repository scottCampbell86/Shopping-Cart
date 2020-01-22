function renderAlbum(album) {

    const li = document.createElement('li');
    li.className = album.category;
    li.title = album.description;
    //console.log(li);

    const h3 = document.createElement('h3');
    h3.textContent = album.name;
    //console.log(h3);
    li.appendChild(h3);

    const p = document.createElement('p');
    p.className = 'price';
    const usd = '$' + album.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.value = album.id;
    button.textContent = 'Yup!';
    li.appendChild(button);
    
    return li;
}


export default renderAlbum;
 



