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

