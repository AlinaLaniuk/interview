**Код задачи**

```
const obj = {
    firstName: 'Bill',
    lastName: 'Ivanov',
    showFirstName: function () {
        console.log(this.firstName);
    },
    showLastName: () => {
        console.log(this.lastName);
    }
}

obj.showFirstName();
obj.showLastName();

obj.showFirstName.bind({ firstName: 'Boris' })();
obj.showFirstName.bind({ firstName: 'Boris' }).bind({ firstName: 'Oleg' })(); 

obj.showLastName.bind({ firstName: 'Boris' })(); 
```

**Схема**

![image](https://github.com/AlinaLaniuk/interview/assets/101401177/d2611898-6de0-4293-992a-01db7bd9ac85)




