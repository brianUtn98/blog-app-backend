import mongoose, { Query } from "mongoose";

export default interface IRead{
    findById(id: string): Query<any,any>;
    find(filter: mongoose.FilterQuery<mongoose.Document>): Query<any,any>;
    findAll(): Query<any,any>;
}