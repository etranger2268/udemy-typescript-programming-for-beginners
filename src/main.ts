class User {
  name: string = '';
  age: number = 0;
  isAdult(): boolean {
    return this.age >= 18;
  }
  setAge(age: number) {
    this.age = age;
  }
}

const user = new User();
console.log(user.age);
console.log(user.isAdult());

user.setAge(26);
console.log(user.age);
console.log(user.isAdult());

const liam = new User();
liam.setAge(18);
console.log(liam.age);
console.log(liam.isAdult());
