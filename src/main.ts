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

  constructor(name: string, age: number, adminRole: number) {
    super(name, age);
    this.adminRole = adminRole;
  }
}

const adminUser: AdminUser = new AdminUser('etranger2268', 26, 3);
console.log(adminUser);
