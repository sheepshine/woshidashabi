var addTwoNumbers = function(l1, l2) {
    let number1 = [];
    let number2 = [];
    let arr = [];
    for (let i = l1.length - 1; i >= 0; i--) {
        number1.push(l1[i]);
    }
     for (let i = l2.length - 1; i >= 0; i--) {
        number2.push(l2[i]);
    }
    const maxlength = number1.length > number2.length ? number1.length : number2.length;
    console.log(number1, number2)
    for(let i = maxlength - 1; i >= 0; i--) {
        
        let num1 = number1[i];
        let num2 = number2[i];
        if (!num1) {
            num1 = 0
        }
        if (!num2) {
            num2 = 0
        }
        let curNum = number1[i] + number2[i]
        if (curNum > 9) {
            curNum = 0
            arr[i -1] = arr[i - 1] + 1;
        }
        arr.push(curNum)
    }
    // let number = parseInt(number1) + parseInt(number2);
    // console.log(number)
    let returnArr =[]
    for (let i = arr.length - 1; i >=0; i--) {
        returnArr.push(arr[i])
    }

    return returnArr
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))