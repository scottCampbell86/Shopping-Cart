import { albumsArray, cart } from '../albumsArray.js';
import { calcLineItem, findById, toUSD, calcOrderTotal } from '../utils.js';

const test = QUnit.test;


test('calcLine', function(assert) {
    //Arrange
    const input = 2;
    const expected = 20;
        
   
    
    const result = calcLineItem(input, 10);
    
    assert.deepEqual(result, expected);
});


test('findById', function(assert) {
    //Arrange
    const input = 'float';
    const expected = {
        id: 'float',
        name: 'Float',
        image: './assets/float.jpg',
        description: 'Foggy; Dystopic',
        category: 'Mush',
        price: 10.00
    };

    
    const result = findById(input, albumsArray);
 


    assert.deepEqual(result, expected);
});


test('toUSD', function(assert) {
    
    const input = '10';
    const expected = '10';

    
    const result = toUSD(input);
    
    assert.equal(result, expected);

});

test('calc test', function(assert) {
    
    //const input = ;
    const expected = 45.00;
    

    const result = calcOrderTotal(albumsArray, cart);
   
    assert.equal(result, expected);

});


