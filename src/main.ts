class User {
  readonly name: string = '';
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }

  // setName(name: string) {
  //   this.name = name;
  // }
}

const user = new User('etranger2268', 26);
console.log(user.name);
console.log(user.age);
console.log(user.isAdult());
