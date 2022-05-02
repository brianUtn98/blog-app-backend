import Category from "./Category";
import Intermediate from "./Intermediate";
import User from "./User";

class Novice extends Category{
    constructor(pointsGiven: number = 0){
        super(pointsGiven,0,new Intermediate(0));
    }

    public canPublish(): boolean {
       return true;
    } 
}

export default Novice;