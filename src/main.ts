const getRectangle1 = (height: number, width: number = 10): number => height * width;
console.log(getRectangle1(3, 5));
console.log(getRectangle1(3));

// error
// const getRectangle2 = (height: number = 10, width: number): number => height * width;
// console.log(getRectangle2(3, 5));
// console.log(getRectangle2(3));
