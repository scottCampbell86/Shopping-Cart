// IMPORT MODULES under test here:
// import example from '../src/example.js';
//import findById from './utils.js';
import albums from '../albums.js';
import { calcLineItem, findById } from './utils.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    const input = 2
    const expected = 20
        
    // Set up your parameters and expectations
    
    const result = calcLineItem(input, 10);
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});


test('time to test a function', function(assert) {
    //Arrange
    const input = 'Float';
    const expected = {
        id: 'Float',
        name: 'Float',
        image: './assets/float.jpg',
        description: 'Foggy; Dystopic',
        category: 'Mush',
        price: 10.00
    };
    // Set up your parameters and expectations
    
    const result = findById(input, albums);
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
