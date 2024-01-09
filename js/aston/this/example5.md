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

![Uploading image.png…]()
