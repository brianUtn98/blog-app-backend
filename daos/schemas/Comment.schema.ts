import mongoose from "mongoose";
import userSchema from './User.schema';
import postSchema from './Post.schema';

const commentSchema: mongoose.Schema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: userSchema,
        required: true
    },
    post: {
        type: postSchema,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

export default commentSchema;