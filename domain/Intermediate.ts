import Category from "./Category";
import Expert from "./Expert";
import User from "./User";

class Intermediate extends Category{
    constructor(pointsGiven: number = 0){
        super(pointsGiven,100,new Expert(pointsGiven));
    }

    public canPublish(): boolean {
        return true;
    }
}

export default Intermediate;