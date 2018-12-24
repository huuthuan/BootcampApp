export class Articles {
  public idArticles: number;
  public title: String;
  public userName: string;
  public imgUser: string;
  public content: string;
  public timePost: string;
  public numberComment: number;
  public tag: string;

  public constructor(init?: Partial<Articles>) {
    Object.assign(this, init);
  }
}
