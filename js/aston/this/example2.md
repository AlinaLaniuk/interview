**Код задачи**

```
1 let foo = {
2  x: 42,
3  baz: function () {
4    console.log(this);
5  },
6  bar: () => {
7    console.log(this.x);
8  }
9 }
10
11 foo.baz(); // foo
12 
13 let bar = foo.baz;
14 bar(); // window/global/undef
15
16 foo.bar(); // undef

```

**Схема**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/f6734c6e-79ed-4527-8109-b80b37e6b5ea)
