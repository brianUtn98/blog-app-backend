import Category from "./Category";
import Novice from "./Novice";
import User from "./User";

class New extends Category{
    constructor(){
        super(0,0,new Novice(0));
    }

    public override canPublish(): boolean {
        return false;
    }
}

export default New;