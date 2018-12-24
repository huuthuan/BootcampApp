export class Tag {
  public idTag: number;
  public tag: string;

  public constructor(init?: Partial<Tag>) {
    Object.assign(this, init);
  }
}
