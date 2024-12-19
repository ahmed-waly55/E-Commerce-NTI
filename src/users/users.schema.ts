import mongoose from "mongoose";
import {Users} from "./users.interface";


const usersSchema = new mongoose.Schema<Users>({
    username: {type: String},
    email: {type: String},
    name: {type: String},
    active: {type: Boolean, default: true},
    password: {type: String},
    role: {type: String, enum: ['admin', 'employee', 'user'], default: 'user'},
    googleId: String,
    hasPassword: {type: Boolean, default: true},
    image: {type: String, default: 'user-default.webp'},
    passwordChangedAt: Date,
    passwordResetCode: String,
    passwordResetCodeExpires: Date,
    passwordResetCodeVerify: Boolean
},{timestamps:true});

export default mongoose.model<Users>('users',usersSchema);