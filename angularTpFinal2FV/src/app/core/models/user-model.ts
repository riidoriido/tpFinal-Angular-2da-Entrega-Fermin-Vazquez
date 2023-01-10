export class User {
  id: number;
  usuario: string;
  email: string;
  isAdmin: boolean;

  constructor(user: User) {
    this.id = user.id;
    this.usuario = user.usuario;
    this.email = user.email;
    this.isAdmin = user.isAdmin;
  }

  userInfo(user: User) {
    return user;
  }
}
