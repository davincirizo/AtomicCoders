import { Schema, model } from "mongoose";

const baseSchema = new Schema({
    dateCreated: {
        type: Date,
        required: true
    },
    dateUpdate: {
        type: Date,
        required: true
    },
})
export const BaseModel = model('base', baseSchema)