**Код задачи**

```
var poke1 = { name: 'Pikachu' };
var poke2 = { name: 'Chermander' };
var poke3 = { name: 'Bulbasaur' };

var sayName = function () { console.log(this.name) }

sayName.bind(poke1).bind(poke2).call(poke3);


var sayName2 = function (...rest) { console.log(rest) }

sayName2.bind({}, 1, 2).bind({ x: 5, y: 6 }, 3, 4).call();
```

**Схема**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/fa25ff67-313d-46b1-9e97-d7c324ceb876)
