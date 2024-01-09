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

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/4dea6741-6a24-4b6c-a084-2baeff184372)


![image](https://github.com/AlinaLaniuk/interview/assets/101401177/ba0e76c5-d35b-4f2a-8c38-3779464a9ec7)


