import Comment from "./Comment";
import Score from "./Score";
import User from "./User";

class Post{
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    private _content: string;
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
    private _tags: Array<string>;
    public get tags(): Array<string> {
        return this._tags;
    }
    public set tags(value: Array<string>) {
        this._tags = value;
    }
    private _author: User;
    public get author(): User {
        return this._author;
    }
    public set author(value: User) {
        this._author = value;
    }
    private _creationDate: Date;
    public get creationDate(): Date {
        return this._creationDate;
    }
    public set creationDate(value: Date) {
        this._creationDate = value;
    }
    private _open: Boolean;
    public get open(): Boolean {
        return this._open;
    }
    public set open(value: Boolean) {
        this._open = value;
    }
    private _comments: Array<Comment>;
    public get comments(): Array<Comment> {
        return this._comments;
    }
    public set comments(value: Array<Comment>) {
        this._comments = value;
    }
    private _scores: Array<Score>;
    public get scores(): Array<Score> {
        return this._scores;
    }
    public set scores(value: Array<Score>) {
        this._scores = value;
    }


  constructor(
    _title: string, 
    _content: string, 
    _author: User, 
    _tags: Array<string> = [], 
    _creationDate: Date = new Date(), 
    _open: Boolean = true, 
    _comments: Array<Comment> = [], 
    _scores: Array<Score> = []
) {
    this._title = _title
    this._content = _content
    this._tags = _tags
    this._author = _author
    this._creationDate = _creationDate
    this._open = _open
    this._comments = _comments
    this._scores = _scores
  }

  public points(): number{
      return this.scores.map((score) => score.quantity).reduce((a,b) => a+b,0);
  }


}

export default Post;