import mongoose, { Query } from "mongoose";
import IRead from "./IRead";
import IWrite from './IWrite';

class DAO implements IRead, IWrite{
    private model: mongoose.Model<mongoose.Document>;
    constructor(model: mongoose.Model<mongoose.Document>){
        this.model = model;
    }

    create(resource: any): Promise<any> {
        return this.model.create(resource);
    }
    updateById(id: string, resource: any): Query<any,any> {
        return this.model.updateOne({_id: id},resource);
    }
    deleteById(id: string): Query<any,any> {
        return this.model.findByIdAndDelete(id);
    }
    findById(id: string): Query<any,any> {
        return this.model.findById(id);
    }
    find(filter: mongoose.FilterQuery<mongoose.Document<any, any, any>>): Query<any,any> {
        return this.model.find(filter);
    }
    findAll(): Query<any,any> {
        return this.model.find({});
    }
}

export default DAO;