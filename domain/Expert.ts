import Category from "./Category";
import Honorable from "./Honorable";
import User from "./User";

class Expert extends Category{
    constructor(pointsGiven: number = 0){
        super(pointsGiven,1000,new Honorable(pointsGiven));
    }

    public canPublish(): boolean {
        return true;
    }
}

export default Expert;