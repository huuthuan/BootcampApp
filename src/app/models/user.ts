export class User {
  id: number;
  username: string;
  password: string;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
