import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "@/app/types/user";

const Users: Schema<IUser> = new Schema({
    username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User: Model<IUser> =
  mongoose.models.Recipe || mongoose.model<IUser>("user", Users);

export default User;
