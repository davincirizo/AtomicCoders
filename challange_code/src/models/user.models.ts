import { Schema,model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
})

export const userModel = model('user', userSchema)