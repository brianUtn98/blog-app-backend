import mongoose,{Query} from "mongoose";
import DAO from "./Dao";
import userSchema from "./schemas/User.schema";

const UserModel = mongoose.model("User",userSchema);

export default new DAO(UserModel);