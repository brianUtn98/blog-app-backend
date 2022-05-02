import mongoose from "mongoose";
import categorySchema from "./Category.schema";
import postSchema from "./Post.schema";

const userSchema: mongoose.Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    category: {
        type: categorySchema,
        required: true
    },
    followers: [
            {
                type: this
            }
    ],
    posts: [{
        type: postSchema
    }]
});

export default userSchema;