import Category from "./Category";

class RecategorizeRunner{
    public canUpgrade(category: Category): boolean{
        return true;
    }
}

export default new RecategorizeRunner();