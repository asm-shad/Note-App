import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userScheme = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 10
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

export const User = model('User', userScheme);