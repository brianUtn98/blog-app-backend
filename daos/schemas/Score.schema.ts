import mongoose from "mongoose";
import postSchema from './Post.schema';
import userSchema from './User.schema';

const scoreSchema = new mongoose.Schema({
    post: {
        type: postSchema,
        required: true
    },
    givenBy: {
        type: userSchema,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

export default scoreSchema;