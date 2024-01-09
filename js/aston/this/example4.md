**Код задачи**

```
1 function foo() {
2    const x = 10;
3    return {
4        x: 20,
5        bar: () => {
6            console.log(this.x);
7        },
8        baz: function () {
9            console.log(this.x);
10        }
11    };
12 }
13
14 const obj1 = foo();
15 obj1.bar();
16 obj1.baz();
17
18 const obj2 = foo.call({ x: 30 });
19
20 let y = obj2.bar; 
21 let z = obj2.baz; 
22 y(); 
23 z(); 
24
25 obj2.bar(); 
26 obj2.baz();   

```


**Схемы**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/1d054560-9e11-4da9-b055-d80d2d8d6767)

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/6703b22d-5e7c-43a0-ad46-cfd5d496ed89)

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/f5e4431d-539d-4696-983f-e024acafd2c1)

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/c11244fd-1485-4780-96df-b68ebb96e786)


