# Что такое this?

**Главное правило определения this:**

Хочешь знать, чему равняется this, проверь как и какая фнукция запускается.

this - это ключевое слово, которое по своему поведению маскимально близко к поведению идентификатора.

**Алгоритм определения this**

*все примеры здесь в строгом режиме

1. **Нахожусь ли я внутри функции?**

- если нет - идем в пункт **in script or module**
- если да - пункт **this в функции**

2. **In script or module**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/a764aa51-c015-447b-80e4-c1e8413df680)

Если мы внутри модуля, по умолчанию this - это underfined.
Если мы внутри скрипта, по умолчанию this - это глобальный объект. Редкое явление, но this может быть изменено хост-средой. В таком случае значение this будет определяться в соответствии со спецификацией хост-среды.

3. **this в функции**

Если мы находимся в коде функции, нужно определить, является ли функция normal function. Нормальная функция - это любая функция, которая не является стрелочной.
- если стрелка - пункт **this в стрелке**
- если нормальная функция - пункт **this в нормальной функции**

  ![image](https://github.com/AlinaLaniuk/interview/assets/101401177/3f641009-4aad-47d4-9f06-b8a0f003723e)


4. **this в стрелке**

Чтобы понять, чему внутри стрелки равен идентификатор this, нужно сделать тоже самое, что мы делали бы для определения любого другого идентификатора - пройтись по цепочке родительских окружений и найти место, где this определен.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/3b2bbd84-7187-42a2-9d2a-8320e8b5000f)

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/84bbdda5-f14b-41e3-a73a-0a06b3bed235)


5. **this в нормальной функции**

Здесь можно запомнить, что любая нормальная функция всегда имеет хотя бы один аргумент - это this. 
Этот аргумент всегда, без исключения, связывается с каким-то значением в момент вызова нормальной функции.

- если this **никаким явным образом не задан** (какие есть варианты - ниже) - он всегда равен undefined в случае использования строгого режима и Window в браузере в случае нестрогого режима.
![image](https://github.com/AlinaLaniuk/interview/assets/101401177/b6411f04-911c-4627-ae9c-ed000099272b)

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/ea6cf6d1-6320-4ffa-85fc-b1071c908078)

- если видим **call, apply, bind**, понимаем, что this будет задан в соответствии с переданным в методы значением.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/95f22220-4285-40c8-b2ee-f75eea2fcb7f)

- если видим ключевое слово **new**

со словом new можно вызвать любую нормальную функцию (стрелку нельзя). При этом this будет связано с пустым объектом.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/900329ec-ec34-4af4-bbd3-3d8c37cbae92)

- если видим **дот-нотацию**
![image](https://github.com/AlinaLaniuk/interview/assets/101401177/a03b9636-65fc-4b0a-8a83-5a034f10b7a2)

если используется дот-нотация (**речь идет только про вызов через дот-нотацию**), то this будет равнятся тому идентификатору, который стоит перед точкой.

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/15af7e14-7c0f-47c8-9584-677a37f9167a)

6. API call

JS - встраиваемый язык. Это значит, что без хост-среды язык работать не может. Соответственно, работая в хост-среде, JS может использовать API этой хост-среды.

API при этом может назначить this в соответствии с собстенной спецификацией.
```
function doHandleClick(){
  console.log('this is: ', this)
}

document
  .body
  .addEventListener('click', doHandleClick)
```
Вот в этом коде this при нажатии на body по правилам JS должен быть undefined (передаем функцию, но ее вызов производится по нажатию). Но из-за особенностей API браузера, this здесь будет указывать на body (в соответствии со спецификацией).
```
function doHandleClick(){
  console.log('this is: ', this)
}

document
  .body
  .addEventListener('click', doHandleClick.bind({name: 'Alina'}))
```
В этом примере при клике на body будет выводится указанный в качестве объект. 

Такая же история с вызовом функции через setTimeout. Если мы передадим некоторую функцию в setTimeout в браузере и внутри этой функции залогируем this, то получим undefined или Window. Но при использовании такой конструкции в node будет выведен в консоль объект Timeout. Так происходит потому, что setTimeout - это стороннее API, и значение this при работе с ним определяет спецификация хост-среды.

