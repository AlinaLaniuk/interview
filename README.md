# Интервью

Готовлюсь к интервью. Здесь разные задачи, ответы к ним и рассуждения на тему.


// написать функцию или последовательность операций, которая вернет результат следующих условий
// результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке букв,
// результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
// результат не содержит одинаковых букв

const input = [
    {value: 'abcd', order: 4, expired: false},
    {value: 'qwer', order: 2, expired: true},
    {value: 'xyz1', order: 1, expired: false},
    {value: 'abx2', order: 3, expired: false},
];

function concatStrings(input){
    const notExpiredElemsInRightOrder = input.filter((elem) => !elem.expired).sort((elem1, elem2) => elem1.order - elem2.order);
    const reverseValuesString = notExpiredElemsInRightOrder.map((elem) => {
        let reversedValue = '';
        for(let i = elem.value.length - 1; i >= 0; i--){
            reversedValue += elem.value[i];3 
        }
        return reversedValue;
    }).join(' ');
    const charsMap = {};
    let result = '';
    for(let i = 0; i < reverseValuesString.length; i++){
        if(reverseValuesString[i] === ' '){
            result += reverseValuesString[i];
            continue;
        }
        if(charsMap[reverseValuesString[i]]){
            continue;
        } else {
            result += reverseValuesString[i];
            charsMap[reverseValuesString[i]] = 1;
        }
    };
    return result;
}

let result = concatStrings(input);

console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
