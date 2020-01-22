function renderAlbum(album) {

    const li = document.createElement('li');
    li.className = album.category;
    console.log(className);
    //li.title = album.description;

    const h3 = document.createElement('h3');
    h3.textContent = album.name;
    li.appendChild(h3);

    const button = document.createElement('button');
    button.value = album.id;
    button.textContent = 'Yup';
    li.appendChild(button);

    
}


export default renderAlbum;
 



