class MyArray {
    constructor () {
        for(let i = 0; i < arguments.length; i++){
            console.log(this[i])
            this[i] = arguments[i];
        }
    this.length = arguments.length;
    }
    //Method push to the end of arr
    push() {
        for(let i = 0; i < arguments.length; i++){
            this[++this.length] = arguments[i];
        }
        return this.length++;
    }
    //Method pop, delete last el
    pop() {
        
        if (this.length == 0){
            
            return undefined;
        }
        else {
            delete this[this.length-1]
            return this[this.length-1];
        }
    }
    //Method callback on each
    foreach(callback,thisArg) {
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    }
    //Method map by callback
    map(callback) {
        let arr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            arr.pushTo(callback(this[i], i, this));
        }
        return arr
    }    
    //Method filter by callback
    filter(callback) {
        let arr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)){
                arr.pushTo(this[i]);
            }
        }
        return arr;
    }
    //Method create arr from value
    static from (value) {
        let arr = new MyArray();
        for (let i = 0; i < value.length; i++) {
                arr.pushTo(value[i]);
        }
        return arr;
    }
    //Method reduce arr
    reduce(callback,start) {
        let res = start;
        res === undefined ? res = this[0] : start;
        for (var i = 0; i < this.length; i++) {
            if( i === 0 ){
                continue;
            } else {
                res = callback.call(null, res, this[i], i , this);
            }
        }
        return res;
    }
    //Method convert to string
    toString() {
        let str = String();
        for (let i = 0; i < this.length; i++){
            str += this[i] + ',';
        }
        return str;
    }
    //вставками + пузырьком
    sort(callback) {
        if(callback){
            console.log(' bubble sort');
          for (let i = 0; i <  this.length-1; i++){
              for (let j = 0; j <  this.length-1; j++){
                  if (callback( this[j],  this[j+1]) <= 0? false: true) {
                      let max =  this[j];
                      this[j] =  this[j + 1];
                      this[j + 1] = max;
                  }
              }
          }  
        }
        else {
            console.log(' insertion sort');
            for (let i = 1; i < this.length; i++) {
                let current = this[i];
                let j = i;
                while (j > 0 && String(this[j - 1]) > String(current)) {
                    this[j] = this[j - 1];
                    j--;
                }
                this[j] = current;
            }
        }
        return this;
    }
    //spread
    *[Symbol.iterator]() {
        let l = this.length;
        for (let i = 0; i < this.length; i++) {
             yield this[i];
            
        }
    }
}


export default MyArray;