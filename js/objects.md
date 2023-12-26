# Дескриптор свойств объекта

Дескриптор свойств - это что-то вроде тонкой настройки полей объекта. Мы создаем объект и каждое поле настраиваем в соответствии со своими целями: нужно ли, что поле перечислялось в циклах, допустимо ли изменения значения этого поля, можно ли изменить конфигурацию и т.д.

Существует всего 6 ключей дескриптора:

1. configurable. При значении false - свойство нельзя удалить из объекта, нельзя переопределить другие ключи дескриптора (например, если writable установлен как true, изменить его на false нельзя)

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/42b35570-1192-4e93-a275-741be5f70753)

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/e3611d99-4824-425f-b9b8-c3c1d418caba)

2. enumerablre. Если значением ключа является true, свойство будет "видно", если false - нет. 

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/fa8737a3-bab4-497f-8e24-73530af69703)

For...in, Object.keys, Object.values - не перечислит, оператор in - покажет true.

3. value. Значение свойства

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/876d5b5e-3007-468e-8906-18c3b39e2b59)

4. writable. Если true - значение свойства можно изменить, если false - нельзя. **Нельзя изменить именно через присвоение. Через defineProperty можно.**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/05d5f998-b414-45fd-936a-517c05bdc86e)

5. get. Если задано значение этого поля, свойство объекта будет геттером. 

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/3cc32fb1-4d32-47fa-8e42-536e39f1f354)

Обрати внимание, что нет поля writable и value. Если попытаться задать и get, и value, и writable, получим ошибку.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/4f3dc36c-b9f2-4779-a186-ba278049db59)

Но если полю-геттеру изменить через defineProperty значения value или writable, поле перестанет быть геттером.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/091166cd-e93f-47ff-889f-4b87b89cc55b)

6. set. Все тоже самое, что с get, но сеттер.


**Нюансы**

- Object.getOwnPropertyDescriptor всегда отдает разный объект. То есть он как бы снимает копию с какого-то внутреннего объекта-дескриптора и отдает. Сам дескриптор зарыт глубоко, чтобы доступ к нему был только через специальные методы.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/cbfef232-1e70-40e0-b257-80a9dadefce4)

- свойство дескриптора enumerable. Когда мы говорим, что через for...in не перебираются прототипные методы объекта, дело не в том, что они прототипные и что-то там внутри хитро настроено. Просто у этих свойств объекта Object.prototype в дескрипторах указано enumerable: false

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/ddc60b1b-19b0-44a9-9fe2-b168359ee14a)
