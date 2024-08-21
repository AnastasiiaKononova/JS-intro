/*
Створити клас Worker
- name
- rate
- days
Метод getSalary(), який розраховує зп за формулою: rate*days
*/


class Worker{
    constructor(name, rate, days) {
        this.name = name;
       //  this._rate = rate;
        // Замість вручну встановлення _rate - скористаємось сеттером:
        this.rate = rate;


        // this._days = days; -- Замість цього користуємось сеттером:
        this.days = days; 
    }


    // get - віддавати, set - встановлювати

    /*
    setRate(value) {
        if (value < 0) {
            throw new RangeError('Rate must be great than 0');
        }
        this._rate = value;
        return this._rate;
    }
    getRate(){
        return this._rate;
    }
    */

    get rate(){
        return this._rate;
    }

    /*
    Використання геттера:
    wrkr.tariff
    */

    set rate(value){  // 1 argument must be
        if (value < 0) {
            throw new RangeError('Rate must be great than 0');
        }
        this._rate = value;
    }

    /*
    wrkr.tariff = 10;
    */

    get days() {
        return this._days;
    }


    set days(value){
        if (value < 0) {
            this._days = 0
        } else {
            this._days = value;
        }
    }


    getSalary() {
        return this.rate * this.days
    }
}


const wrkr = new Worker('John', 5, 20);

/*
ставка не може бути < 0, якщо передали -ставку, викинути помилку
кількість відпрацьованих днів не може бути < 0, то не викидати, замість цього this.days = 0
*/


// після створення екземпляру зміни полів не валідуються

/// угода розробників: приватні поля мають перед ім'ям _

// приватні поля (підтримка вже є, але з'явилась нещодавно, неоновлені/старі браузери можуть не підтримувати цю можливість) - ім'я поля починається з #
// цей механізм реалізований у мові



/*
Інкапсуляція - приховання певної складнощі або даних від зовнішнього впливу
Якщо має бути можливість зміни - має бути наданий інтерфейс (відповідний метод, який зможе це зробити)
*/


// Таска - приховати поле days і зробити геттери та сеттери для нього

/*
Створити класс RangeValidator
- start (початок)
- end (кінець діапазону)
Умова: кінець не може бути раніше за початок діапазону - викидуємо помилку, об'єкт не створюємо
реалізувати геттери та сеттери для обох властивостей
реалізувати метод validate(value) і перевіряє, чи входить знаення в діапазон
реалізувати геттер range -> [start, ...., end] 
*/


class RangeValidator{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }

    get start(){
        return this._start;
    }

    set start(v) {
        this._start = v;
    }

    get end() {
        return this._end;
    }

    set end(v) {
        if (v < this._start) {
            throw new RangeError('End must be greate than start')
        }
        this._end = v;
    }

    get range(){
        // const arr = [];
        // for (let i = this.start; i <= this.end; i++){
        //     arr.push(i);
        // }

        return new Array(this.end-this.start+1).fill(null).map((el, i) => this.start + i)
    }

    validate(value) {
        return value >= this.start && value <= this.end
    }
}