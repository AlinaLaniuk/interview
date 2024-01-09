**Код задачи**

```
1 var globalVar = 'global';
2 var outerVar = 'outer';
3 
4 function outerFunc(outerParam) {
5   var outerParam = 'outer-inner';
6   function innerFunc(innerParam) {
7        console.log(globalVar, outerParam, innerParam);
8    }
9    return innerFunc;
10 }
11
12 const x = outerFunc(outerVar);
13 outerVar = 'outer-2';
14 globalVar = 'guess';
15 x('inner');
```

**Схема**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/fdf74c3e-e33c-4b30-97a6-b4507b385e28)


**Пошаговый алгоритм решения**

1. на 1 и 2 строках созданы переменные globalVar, outerVar, на 4-ой - функция outerFunc.
2. на 12 строке в переменную х сохранен результат работы функции outerFunc, вызванной со значением параметра 'outer' - ссылка на функцию innerFunc.
3. на 13 строке происходит переопределение значение переменной outerVar, на 14-ой - переопределение значения переменной globalVar
4. на 15-ой строке происходит вызов функции x со значением параметра 'inner'.
5. на 17 строке - логирование переменных:

   **globalVar:**
   
       а. в лексическом окружении innerFunc переменная отсутствует. ищем в родительском.
   
       b. в лексическом окружении outerFunc переменная отсутсвует. ищем в родительском.
   
       c. переменная globalVar есть в лексическом окружении Global. значение - 'guess' (к моменту вызова фнукции х знаечние переменной было переопределено, 14 строка)


    **outerParam:**
   
       а. в лексическом окружении innerFunc перемення отсутствует. ищем в родительском.
   
       b. переменная outerParam есть в лексическом окружении outerFunc. значение - 'outer-inner'
   

    **innerParam:**
   
       a. переменная innerParam есть в лексическом окружении innerFunc. значение - 'inner'
