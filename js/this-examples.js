const theObj = {
  name: 'Alina',
  doLogThis: function (){
    console.log('this is: ', this)
  }
};

const doLogThisGlobal = theObj.doLogThis;
doLogThisGlobal();

// здесь вызов функции doLogThisGlobal будет равен undefined или Window, так как в переменную doLogThisGlobal мы сохранили ссылку на функцию объекта, и вызываем эту функцию мы
// без явного изменения this

const theObj2 = {
    name: 'Alina',
    doLogThis: function (){
      console.log('this is: ', this)
    }
}

setTimeout(theObj.doLogThis, 1);

// в этом примере нужно обратить внимание на то, что в setTimeout мы передаем функцию, но не вызываем ее. Значит, она будет вызвана не по правилу дот нотации, она будет\
// просто вызвана браузером через заданное количество времени. И вызвана она будет просто как функция. Это все равно, что сохранить как в
// примере выше ссылку на функцию из объекта в какую-то переменную, а потом передать ее в setTimeout


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function getName(greetings = 'hello', exclamation = '!!!') {
  console.log(`${greetings} ${this.name} ${exclamation}`);
}

const john = { name: 'John' };
const dave = { name: 'Dave' };
const getBoundName = getName.bind(john);
const getReboundName = getBoundName.bind(dave);

getBoundName() // 'john'
getReboundName() // 'john'

// что будет выведено? перебиндить контекст нельзя, поэтому в обоих случаях мы получим Джона

Function.prototype.customBind = function (newThis, ...boundArgs){// 
    return (...args) => {
        return this.call(newThis, ...boundArgs, ...args);   
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// реализация кастомного bind. Обрати внимание на частичное применение (реальный bind тоже так может), а также на то, что возвращаемая функция - стрелка. Можно сделать и через нормальную функцию, однако в этом случае нужно сделать замыкание, сохранить this (функцию, к которой биндим) в переменную в родительском окружении возвращаемой нормальной функции.

const getJohnNiggaGreetings = getName.customBind(john, 'wazzup');
const getCustomReBoundName = getJohnNiggaGreetings.customBind(dave);
getJohnNiggaGreetings('MY BOY!!!') // 
getJohnNiggaGreetings('SE YA') // 
console.log(getCustomReBoundName()); // 

function logThis() {
    console.log(this);
}

logArrowThis = () => {
    console.log(this);
}

boundLogThis = logThis.bind({name: 'kakTebeTakoe!?'});

new logThis(); // this здесь - пустой объект (из-за new)
new boundLogThis(); // также будет выведен пустой объект. контекстом boundLogThis будет объект, который был передан в bind. Однако енсли эту функцию вызвать через new, про bind можно забыть. Не надо выдумывать то, чего нет. Мы смотрим на то, как вызывается функция. Фугкция вызывается с ключевым словом new. Этот оператор задает в качестве this пустой объект. 
new logArrowThis(); // свалимся с ошибкой, нельзя вызвать стрелку с new, так как стрелка не может быть конструктором

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

john = {
  name: 'john',
  surname: 'smith',

  getSurname1() { return this.surname; },

  getSurname2: () => this.surname,

  getSurname3: function () { return this.surname },

  getSurname4: function () {
    const getSurnameInner = () => {
      return this.surname;
    }

    return getSurnameInner();
  },

  getSurname5: function () {
    function getSurnameInner() {
      return this.surname;
    }

    return getSurnameInner();
  }
}

// console.log(john.getSurname1()) // 'smith'
// console.log(john.getSurname2()) // undefined
// console.log(john.getSurname3()) // 'smith'
// console.log(john.getSurname4()) // 'smith'
// console.log(john.getSurname5()) // undefined
