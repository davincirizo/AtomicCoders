import { connect } from "mongoose";
import {MONGO_URI} from '../../config'



export const connectDB = () => {
    connect(MONGO_URI as string)
    console.log('Connect database correctly')
}