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

  public override isAdult(): boolean {
    return true;
  }

  public sayAdminRole(): string {
    return `My adminRole is ${this.adminRole}.`;
  }
}

const adminUser: AdminUser = new AdminUser('etranger2268', 0);
console.log(adminUser.isAdult());
