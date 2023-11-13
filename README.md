# Интервью

Готовлюсь к интервью. Здесь разные задачи, ответы к ним и рассуждения на тему.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


написать функцию или последовательность операций, которая вернет результат следующих условий:
- результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке букв,
- результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
- результат не содержит одинаковых букв

```
const input = [
    {value: 'abcd', order: 4, expired: false},
    {value: 'qwer', order: 2, expired: true},
    {value: 'xyz1', order: 1, expired: false},
    {value: 'abx2', order: 3, expired: false},
];

function concatStrings(input){
    const notExpiredElemsInRightOrder = input.filter((elem) => !elem.expired).sort((elem1, elem2) => elem1.order - elem2.order);
    const reverseValuesString = notExpiredElemsInRightOrder.map((elem) => {
        let reversedValue = '';
        for(let i = elem.value.length - 1; i >= 0; i--){
            reversedValue += elem.value[i];3 
        }
        return reversedValue;
    }).join(' ');
    const charsMap = {};
    let result = '';
    for(let i = 0; i < reverseValuesString.length; i++){
        if(reverseValuesString[i] === ' '){
            result += reverseValuesString[i];
            continue;
        }
        if(charsMap[reverseValuesString[i]]){
            continue;
        } else {
            result += reverseValuesString[i];
            charsMap[reverseValuesString[i]] = 1;
        }
    };
    return result;
}

let result = concatStrings(input);

console.log(result);
```

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// операторы, что делают

**?. - оператор опциональной цепочки. Облегчает жизнь при работе с вложенными объектами.**

Пример:

```
const auto1 = {
 brand: 'Tesla',
 model: 'ModelX',
 details: {
    color: 'Красный',
    year: 2021,
    atStock: true
 }
}

const auto2 = {
 brand: 'Audi',
 model: 'ModelY',
}

const autos = [auto1, auto2];

autos.forEach((auto) => {
    // вот так ошибка не упаедт, так как мы работаем через оператор опциональной цепочки. когда выполнение кода доходит до этого оператора, выполнение выражения автоматически прекращается в случае отсутствия свойства  и возвращается undefined
   console.log(auto.details?.color); 
       // вот так упадет ошибка, потому что свойства details и color в нем нет у второго объекта.
   console.log(auto.details.color); 
});
```

**?? - оператор нулевого слияния**
Можно рассматривать как частный случай оператора ||. В случае с опреатором ИЛИ falsy значения будут преобразованы в false и вернутся первое true или последнее false. В случае с оператором нулевого слияния все ложноподобные значения будут как бы приравнены к true кроме значений null и undefined. 

const test = 0 ?? 5;
console.log(test) // будет выведен 0
const test1 = '' ?? 5;
console.log(test1) // будет выведена пустая строка
const test2 = null ?? 5;
console.log(test2) // будет выведена 5
const test3 = 0 ?? undefined;
console.log(test3) // будет выведен 0
const test4 = null ?? undefined;
console.log(test4) // будет выведен undefined (тут по аналогии с ||. первый true или последний false)

**||= - оператор присваивания логического ИЛИ. Сравнит как оператор ИЛИ и произведет присваивание.**
```
const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// Expected output: "title is empty"
```

**&&= - оператор присваивания логического И. Сравнит как оператор И и произведет присваивание.**

```
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0
```

**structuredClone - функция, которая позволяет сделать быстрое и легкое глубокое копирование объекта**

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```
setTimeout(() => {
    console.log('timeOut')
}, 0) // колбэк упадет в макротаски, когда буджет для этого возможность

console.log(1); // выведится первым, так как это синхронный код

new Promise(resolve => {
    console.log('Promise'); // функция, которая передается в конструктор промиса будет выполнена синхронно. поэтому Promise залогируется после единицы как часть синхронного кода
    setTimeout(() => {
        console.log('777');
        resolve()
    }, 0) // колбек этого таймаута также упадет в макротаски, когда придет его время
}).then(() => {
    console.log('then1');
}).then(() => {
    console.log('then2');
}) // эти логи выведуться после резолва промиса от конструктора

console.log(4);

setTimeout(() => {
    console.log('timeOut2')
}, 0)

```

вывод здесь - 1 - Promise - 4 - timeOut - 777 - then1 - then2 - timeOut2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

```
const fetchData = async () => {
    const result = await doSomething(getDelay());
    return result;
};
fetchData(); // что вернет?
```

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Нельзя выстроить прототипную цепочку таким образом, чтобы она замыкалась в круг (последний объект ссылался на первый)
![image](https://github.com/AlinaLaniuk/interview/assets/101401177/e6e1580d-9088-417e-b2b3-cf32b8abe042)
таким образом поиск какого-то свойства приведет к бесконечному циклу. рантайм не позволяет такое провернуть, кидает ошибку

вернется промис, потому что функции, помеченные как ассинхронные, всегда возвращают промис.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createCounter(){
    let count = 0;

    function increment(){
        debugger
        count++;
    }

    function decrement(){
        count--;
    }

    return {
        count,
        increment,
        decrement
    }
}

const result = createCounter();
result.increment();
result.increment();
console.log(result.count)

//Задача на замыкание. Оченвидно, что в консоль выведется 0. Однако, я здесь зпуталась из-за формулировки задачи. Если поставить дебаггер в функцию increment, видно, что count увеличивается. По сути это очень похоже на классический пример счетчика с замыканием:

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        return count;
    }

    return () => {
       return increment();
    }
}

// Помни, что задачи могут быть и такими. Замыкание в первой задаче происходит, просто в такой формулировке не получится отобразить увеличение счетчика. Можно либо в возвращаемом объекте
//сделать count геттером, либо переписать сами функции увеличения и уменьшения счетчика на работу с this.counter
