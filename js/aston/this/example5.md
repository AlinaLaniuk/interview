**Код задачи**

```
function foo() {
    return function bar() {
        console.log(this)
        return () => console.log(this)
    }
}

const baz = foo().call({x:10});
baz.call({y:20}); 
```

**Схемы**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/ed83f640-563d-431f-80b6-c3ff07755852)

