export class Post {
  public id: number;
  public username: string;
  public imguser: string;
  public content: string;
  public timepost: string;
  public like: number;
  public numbercomment: number;
  public comment: string;

  public constructor(init?: Partial<Post>) {
    Object.assign(this, init);
  }
}
