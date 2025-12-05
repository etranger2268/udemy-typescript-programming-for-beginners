class User {
  name: string = '';
  private age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 18;
  }
}

const user: User = new User('etranger2268', 26);
console.log(user);
