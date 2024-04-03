import { Schema,model } from "mongoose";

const tokenSchema = new Schema({
  name: {
    type: String
  },
  user: {
    type: String
  }
})

export const tokenModel = model('token', tokenSchema)