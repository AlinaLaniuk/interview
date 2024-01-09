**Код задачи**

```
const user = {
    name: 'Bob',
    funcFunc() {
      return function() {
        console.log(this);
      }
    },
    funcArrow() {
      return () => {
        console.log(this);
      }
    },
    arrowFunc: () => {
      return function() {
        console.log(this);
      }
    },
    arrowArrow: () => {
      return () => {
        console.log(this);
      }
    },
  };
  
  user.funcFunc()();
  const foo = user.funcFunc();
  foo();


  user.funcArrow()();
  user.arrowFunc()();
  user.arrowArrow()();
  
```

**Схема**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/60dcb9e6-bf11-43b0-bbde-37705ed13b4b)
