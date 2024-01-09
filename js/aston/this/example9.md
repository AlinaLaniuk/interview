**Код задачи**

```
const obj = {
    child: {
        i: 10,
        b: () => console.log(this.i, this),
        c() {
            console.log(this.i, this);
        },
    }
};

obj.child.b();
obj.child.c();
```

**Схема**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/f8e61ed5-2001-4c50-a3de-7313cf648b2d)
