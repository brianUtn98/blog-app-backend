import Category from "./Category";
import New from "./New";
import Post from "./Post";

class User{
    private _username: string;
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    private _hashPassword: string;
    public get hashPassword(): string {
        return this._hashPassword;
    }
    public set hashPassword(value: string) {
        this._hashPassword = value;
    }
    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    private _category: Category;
    public get category(): Category {
        return this._category;
    }
    public set category(value: Category) {
        this._category = value;
    }
    private _followers: Array<User>;
    public get followers(): Array<User> {
        return this._followers;
    }
    public set followers(value: Array<User>) {
        this._followers = value;
    }
    private _posts: Array<Post>;
    public get posts(): Array<Post> {
        return this._posts;
    }
    public set posts(value: Array<Post>) {
        this._posts = value;
    }


  constructor(
    _username: string, 
    _hashPassword: string,
    _firstName: string, 
    _lastName: string, 
    _category: Category = new New(), 
    _followers: Array<User> = [], 
    _posts: Array<Post> = []
) {
    this._username = _username
    this._hashPassword = _hashPassword;
    this._firstName = _firstName
    this._lastName = _lastName
    this._category = _category
    this._followers = _followers
    this._posts = _posts
  }


    public points(): number{
        return this._posts.map((post) => post.points()).reduce((a,b) => a+b,0);
    }

    public canPublish(): boolean{
        return this.category.canPublish();
    }

    public canGivePoints(): boolean{
        return this.category.canGivePoints();
    }

    public remainingPoints(): number{
        return this.category.remainingPoints();
    }
}

export default User;