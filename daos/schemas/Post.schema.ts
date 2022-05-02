import mongoose from "mongoose";
import commentSchema from "./Comment.schema";
import scoreSchema from "./Score.schema";
import userSchema from './User.schema';

const postSchema: mongoose.Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: userSchema,
        required: true
    },
    tags: [
        {
            type: String
        }
    ],
    creationDate: {
        type: Date,
        required: true
    },
    open: {
        type: Boolean,
        required: true
    },
    comments: [
        {
            type: commentSchema
        }
    ],
    scores: [
        {
            type: scoreSchema
        }
    ]
});

export default postSchema;