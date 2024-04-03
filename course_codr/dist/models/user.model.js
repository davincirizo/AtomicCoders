"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const base_model_1 = require("./base.model");
exports.UserModel = base_model_1.BaseModel.discriminator('user', new mongoose_1.default.Schema({
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
        required: true
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
