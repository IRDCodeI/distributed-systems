export class Users {
  constructor(
    username = '',
    name = '',
    lastname = '',
    email = '',
    password = ''
  ) {
    this.username = username;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.typeUser = "cliente";
  }

  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  typeUser: string;
}
