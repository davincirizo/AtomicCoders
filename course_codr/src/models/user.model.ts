import mongoose, { Schema, model } from "mongoose";
import { BaseModel } from "./base.model";

export const UserModel = BaseModel.discriminator('user',
    new mongoose.Schema({
        userName: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            select:false,
            // bcrypt:true
        }
    }));


// const userSchema = new Schema({
//   userName: {
//     type: String,
//     unique: true,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// })

// export const TaskModel = model('task', UserModel)