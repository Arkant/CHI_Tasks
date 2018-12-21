// import myArray from './myArray';
class myArray {
    constructor() {
        this.length = 0;
    }
    map(){
        console.log('i am map');
    }
}


describe('test custom class myArray', () => {
    describe('test method map of class myArray', () => { 
        
        test('has method map', () => {
          const arr = new myArray();
          expect(arr.map).toBeInstanceOf(Function);
        });
        test('doesnt have own method map', () => {
            const arr = new myArray();
            expect(arr.hasOwnProperty('map')).toBeFalsy();
          });

          test('call with 3 arguments', () => {
            const arr = [1,2,3,4]
            const cb = jest.fn();
            arr.map(cb)
            expect(cb).toBeCalledWith(1,0,arr);
            expect(cb).toHaveBeenLastCalledWith(4,3,arr);
          });

        test('comp must be a func',() => {
            var arr = new myArray(1,2,3,4);
            cb = 1;
            expect(arr.sort(cb)).toThrowError(TypeError);
        });
    });
    
  });