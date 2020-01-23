import { albumsArray , cart } from '../albumsArray.js';
import { calcLineItem, findById, toUSD, calcOrderTotal } from '../utils.js';

const test = QUnit.test;


test('time to test a function', function(assert) {
    //Arrange
    const input = 2;
    const expected = 20;
        
   
    
    const result = calcLineItem(input, 10);
    
    assert.deepEqual(result, expected);
});


test('time to test a function', function(assert) {
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


test('time to test a function', function(assert) {
    //Arrange
    const input = '10';
    const expected = '10';
    // Set up your parameters and expectations
    
    const result = toUSD(input);
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);

});



test('time to test a function', function(assert) {
    //Arrange
    const input = 'Bazooka Tooth';
    const expected = 15.00;
        
   
    
    const result = calcOrderTotal('Bazooka Tooth');
    
    assert.equal(result, 15.00);
});

//calcOrderTotal(albumsArray, cart)