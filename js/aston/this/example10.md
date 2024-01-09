**Код задачи**

```
function foo() {
    console.log('d2.1', d2);
    let d1 = '1';
    return function() {
        console.log('d1', d1);
        console.log('d2.2', d2);
    }
}

const d2 = '2';
const x = foo();

x(); 
```

**Схема**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/69140554-8662-417c-b26d-95b6137d7426)
