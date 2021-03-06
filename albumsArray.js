const musicForEarthworms = {
    id: 'music-for-earthworms',
    name: 'Music for Earthworms',
    image: './assets/MforEw.jpg',
    description: 'Raw; Spooky',
    category: 'independent', 
    price: 8.00
};

const appleseed = {
    id: 'appleseed',
    name: 'Appleseed',
    image: './assets/appleseed.jpg',
    description: 'Very spooky',
    category: 'independent',
    price: 8.00
};

const float = {
    id: 'float',
    name: 'Float',
    image: './assets/float.jpg',
    description: 'Foggy; Dystopic',
    category: 'Mush',
    price: 10.00
};

const laborDays = {
    id: 'labor-days',
    name: 'Labor Days',
    image: './assets/labordays.jpg', 
    description: 'Inspired; Dynamic',
    category: 'Def Jux',
    price: 10.00
};

const bazookaTooth = {
    id: 'bazooka-tooth',
    name: 'Bazooka Tooth',
    image: './assets/bazookatooth.jpg',
    description: 'A Panic Attack',
    category: 'Def Jux',
    price: 15.00 
};

const noneShallPass = {
    id: 'none-shall-pass',
    name: 'None Shall Pass',
    image: './assets/noneshallpass.jpg', 
    description: 'A. Classic.',
    category: 'Def Jux',
    price: 12.00
};

const skelethon = {
    id: 'skelethon',
    name: 'Skelethon',
    image: './assets/skelethon.jpg',
    description: 'Dark; Psychadelic',
    category: 'Rhymesayers',
    price: 12.00
};


const theImpossibleKid = {
    id: 'the-impossible-kid',
    name: 'The Impossible Kid',
    image: './assets/impossible.jpg', 
    description: 'Honest; On A Good Day',
    category: 'Rhymesayers',
    price: 12.00

};

export const albumsArray = [ 
    musicForEarthworms, 
    appleseed,
    float,
    laborDays,
    bazookaTooth, 
    noneShallPass,
    skelethon, 
    theImpossibleKid
];




export const cart = [{
    id: 'bazooka-tooth',
    quantity: 1
}, {
    id: 'float',
    quantity: 5
}, {
    id: 'music-for-earthworms',
    quantity: 1
}, {
    id: 'skelethon',
    quantity: 1
}];

