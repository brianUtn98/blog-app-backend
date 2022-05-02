import Post from './Post';
import User from './User';

class Comment{
    private _content: string;
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
    private _author: User;
    public get author(): User {
        return this._author;
    }
    public set author(value: User) {
        this._author = value;
    }
    private _post: Post;
    public get post(): Post {
        return this._post;
    }
    public set post(value: Post) {
        this._post = value;
    }
    private _date: Date;
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }


  constructor(
    _content: string, 
    _author: User, 
    _post: Post, 
    _date: Date = new Date()
) {
    this._content = _content
    this._author = _author
    this._post = _post
    this._date = _date
  }

}

export default Comment;