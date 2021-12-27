//refactor
const filterOutOdds = (...arg) => {arg.filter((num) => num % 2 ===0)};

//findMin
function findMin(...arg){
    const newArr = (...arg);
    const min = 0;
    for (let val of arg){
        if (val < min){
            min = val;
        }
    }
};

//mergeObjects
function mergeObjects(obj1,obj2){
    const newObj = {...obj1, ...obj2};
}
const mergeObjects =(obj1,obj2) =>({...obj1, ...obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val*2)];

//Slice and Dice
const removeRandom = (items) =>{
    let randomNum = Math.floor(Math.random() * items.length);
    return [...items(0,randomNum), ...items(randomNum + 1)];
}

const extend = (array1, array2) =>{
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    return {...newObj, key:val};
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj.key;
    return newObj;
}

const combine = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    return newObj;
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    return {newObj, key :val};
}
