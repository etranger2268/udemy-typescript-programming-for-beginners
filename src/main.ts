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

class AdminUser extends User {
  adminRole: number = 1;

  public sayAdminRole(): string {
    return `My adminRole is ${this.adminRole}.`;
  }
}

const adminUser = new AdminUser('etramger2268', 26);
console.log(adminUser.name);
console.log(adminUser.isAdult());
console.log(adminUser.sayAdminRole());
