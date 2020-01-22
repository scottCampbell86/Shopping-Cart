
function renderAlbum(album) {
    const line = document.createElement('li');
    line.className = album.category;
    line.title = album.description;

    const albumTitle = document.createElement('h3');
    albumTitle.textContent = album.name;
    line.appendChild('h3');

    const button = document.createElement('button');
    button.textContent = 'Yup';
    
}


export default renderAlbum



