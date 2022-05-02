import Category from "./Category";
import RecategorizeRunner from "./RecategorizeRunner";
import User from "./User";

class Honorable extends Category{
    constructor(pointsGiven: number = 0){
        super(pointsGiven,5000);
    }

    public canPublish(): boolean {
        return true;
    }
}

export default Honorable;