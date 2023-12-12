# Object.prototype.valueOf

!! Этот метод в прототипе объекта существует потому, что это продиктовано принципами SOLID. Про valueOf говорят, этот метод вернет примитивное значение объекта. Это не совсем так.

**valueOf у разных классов представлен разными функциями**

Object.prototype.valueOf === Number.prototype.valueOf // false
Object.prototype.valueOf === Boolean.prototype.valueOf // false
Object.prototype.valueOf === String.prototype.valueOf // false

В указанных выше в правой части выражений классах valieOf - это все разные функции со своей логикой. У класса объекта этот метод существует потому, что он существует у классов, которые от объекта наследуются. 

**Коротко: Object.prototype.valueOf просто вернет объект, на котором был вызван.**

Подробнее - https://262.ecma-international.org/5.1/#sec-15.2.4.4

А вот необычный пример выполнения кода в соответствием с алгоритмом метода для понимания того, что Object.prototype.valueOf не "возвращает прмитивное значение объекта":

Заменим метод Object.prototype.valueOf на следующий:

```
originalValueOf = Object.prototype.valueOf;

function customValueOf(...args){
    console.log('Object prototype valueOf is called');
    return originalValueOf.call(this, ...args);
}

// метод выполняет стандартную работу valueOf, но при этом логирует строку о том, что был вызван метод именно класса Object
```

Затем удалим метод valueOf у класса Number:

```
numberValueOf = Number.prototype.valueOf
```

И попробуем вызвать метод у числа 9:

```
(9).valueOf() // Number{9}
```

Был получен инстанс класса Number с записанным в поле [[PrimitiveValue]] значением 9.

Почему так:

0. Так как мы удалили метод valueOf у класса Number, по у числа 9 был вызван метод valueOf, который наследуется от родительского Object.
1. При вызове метода valueOf происходит вызов внутреннего метода ToObject.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/93b1f9a5-d2e7-4b5b-9473-70d6516120b0)

Здесь видно, что если придет в качестве this 9, она "обернется" в инстанс класса Number и именно он будет возвращен методом ToObject.

2. Созданный объект возвращается.



