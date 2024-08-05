function MyArray(...argums) {
// new створює пустий обєкт {} і кладе його в this
this.length = 0;
for ( let i = 0; i < argums.length; i++) {
    this.push(argum[i])
}

}

function MyArrayProto() {
    this.push = function(v) {
        this[this.length] = v;
        this.length++;
        return this.length
    }
    
    this.pop = function() {
        // взяти останній елемент, видалитий його
        let temporary = this[this.length - 1];
        delete this[this.length - 1];
        //delete obj.property
        //зменшити довжину на один
        this.length--;
        return temporary;
    }
    
    this.forEach = function(fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }
    
}

MyArray.prototype = MyArrayProto();



const arr = new MyArray();

/*
ДЗ: 
доповнити колекцію MyArray реалізацією методів нативного масива:
- concat
- at
- fill
- filter
- find
- join
- map
- slice
- sort
*/