const {listHandler} = require('./problem1');

describe('list handler', () =>{
    it('organize a list of numbers', () =>{
        expect(listHandler([8, 5, 10, 5, 2, 4, 4, 3])).toStrictEqual([2, 3, 4, 5, 8, 10])
    })  
});
