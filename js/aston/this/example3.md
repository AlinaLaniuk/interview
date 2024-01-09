**Код задачи**

```
const foo = () => {
    console.log(this.prop);
}

const obj = {
    prop: 1,

    m1() {
        console.log(this.prop);
    },

    m2(foo) {
      foo();
    },

    m3() {
        const foo = () => {
            console.log(this.prop);
        }
        foo();
    },

    m4: foo,

    m5() {
      foo();
    },
};

obj.m1();
obj.m2(foo);
obj.m3();
obj.m4();
obj.m5();

```


**Схема**
![image](https://github.com/AlinaLaniuk/interview/assets/101401177/ba6be874-7feb-4e6d-839c-c5c3c2274205)

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/858dddf1-a9af-49ce-8cf7-89994eafa960)


![image](https://github.com/AlinaLaniuk/interview/assets/101401177/f92a50bb-c0eb-42d1-ad91-9bdd90830309)

