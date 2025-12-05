const colors: string[] = ['Red', 'Green', 'Blue'];
console.log(colors);

colors.push('Black');
console.log(colors);

colors.unshift('White');
console.log(colors);

colors[1] = 'Aka';
console.log(colors);

const insertArr: string[] = ['a', 'b', 'c'];
insertArr.splice(1, 0, 'D');
console.log(insertArr);
insertArr.splice(2, 0, 'X', 'Y', 'Z');
console.log(insertArr);

insertArr.splice(2, 2);
console.log(insertArr);

const arr1: string[] = ['a', 'b', 'c'];
const arr2: string[] = ['e', 'f', 'g'];
const mergeArr = arr1.concat(arr2);
console.log(mergeArr);
console.log(arr1);
console.log(arr2);

const arr3: string[] = ['a', 'b', 'c'];
arr3.shift();
console.log(arr3);

arr3.pop();
console.log(arr3);

const arr4: number[] = [1, 2, 3];
const arr5: number[] = [4, 5, 6, ...arr4];
console.log(arr5);
