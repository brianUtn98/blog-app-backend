import Post from "./Post";
import User from "./User";

class Score {
  private _post: Post;
  public get post(): Post {
    return this._post;
  }
  public set post(value: Post) {
    this._post = value;
  }
  private _givenBy: User;
  public get givenBy(): User {
    return this._givenBy;
  }
  public set givenBy(value: User) {
    this._givenBy = value;
  }
  private _quantity: number;
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  private _date: Date;
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }

  constructor(_post: Post, _givenBy: User, _quantity: number,_date: Date = new Date()) {
    this._post = _post;
    this._givenBy = _givenBy;
    this._quantity = _quantity;
    this._date = _date;
  }
}

export default Score;
