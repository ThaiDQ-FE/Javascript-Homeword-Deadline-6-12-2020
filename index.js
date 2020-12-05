var array = [];
var arrayFloat = [];
result = document.getElementById('resultCheck');
resultX = document.getElementById('resultX');
document.getElementById('btnAdd').addEventListener('click', function () {
    if(document.getElementById('chooseOption').value == 'opPrime'){
        addArray();
    }else{
        addFloatArray();
    }
})

document.getElementById('btnClick').addEventListener('click', function () {
    switch (document.getElementById('chooseOption').value) {
        case 'opPrime':
            if(array.filter(isPrime).length > 0){
                result.innerHTML = 'Your prime number: ' +  array.filter(isPrime) + '<br/>' + 'The first prime number is: ' + array.filter(isPrime)[0];
            }else{
                result.innerHTML = 'There is no prime number';
            }
            break;
        case 'opFloat':
            if(checkIntegerNumber(array.concat(arrayFloat)).length > 0){
                result.innerHTML = 'Your total array: ' +  array.concat(arrayFloat) + '<br/>' + 'Have :' + checkIntegerNumber(array.concat(arrayFloat)).length + ' integer';
            }else{
                result.innerHTML = 'There is no integer number';
            }
            console.log(checkIntegerNumber(array.concat(arrayFloat)));
            break;
        default:
            result.innerHTML = 'Positive number: ' +  isPosNumber(array.concat(arrayFloat)) + '<br/>' + 'Have : ' + isPosNumber(array.concat(arrayFloat)).length + ' elements' + '<br/>' + 'Negative number: ' + isNegNum(array.concat(arrayFloat)) + '<br/>' + 'Have : ' + isNegNum(array.concat(arrayFloat)).length + ' elements';
            if(isPosNumber(array.concat(arrayFloat)).length > isNegNum(array.concat(arrayFloat))){
                resultX.innerHTML = 'Positive number more than Negative number.'
            }else if(isPosNumber(array.concat(arrayFloat)).length < isNegNum(array.concat(arrayFloat))){
                resultX.innerHTML = 'Negative number more than Positive number.'
            } else if(isPosNumber(array.concat(arrayFloat)).length = isNegNum(array.concat(arrayFloat))){
                resultX.innerHTML = 'Negative number and Positive number have the same elements.'
            }
            break;
    }
})

function checkOption() {
    if(document.getElementById('chooseOption').value == 'opCompare'){
        document.getElementById('txtNum').setAttribute('disabled',true);
        document.getElementById('txtNumFloat').setAttribute('disabled',true);
    }else if(document.getElementById('chooseOption').value == 'opPrime'){
        document.getElementById('txtNum').removeAttribute('disabled',true);
        document.getElementById('txtNumFloat').setAttribute('disabled',true);
    }else{
        document.getElementById('txtNumFloat').removeAttribute('disabled',true);
        document.getElementById('txtNum').setAttribute('disabled',true);
    }
}

function addArray() {
    array.push(Math.round(+document.getElementById('txtNum').value));
    document.getElementById('txtNum').value='';
    console.log(array);
}

function addFloatArray() {
    arrayFloat.push(+document.getElementById('txtNumFloat').value);
    document.getElementById('txtNumFloat').value='';
    console.log(arrayFloat);
}


function isPrime(array) {
    for (let i = 2; i <= Math.sqrt(array); i++) {
      if (array % i === 0) {
        return false;
      }
    }
    return array > 1;
}

function checkIntegerNumber(array) {
    var tempInteger = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 1 === 0){
            tempInteger.push(array[i]);
        }
    }
    return tempInteger;
}


function isPosNumber(array) {
    var posNum = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            posNum.push(array[i]);
        }
    }
    return posNum;
}

function isNegNum(array) {
    var negNum = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0){
            negNum.push(array[i]);
        }
    }
    return negNum;
}
