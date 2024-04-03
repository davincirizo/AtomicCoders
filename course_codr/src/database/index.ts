import { connect } from "mongoose";
import { ConfigServer } from '../config/config'


export class ConnectDB extends ConfigServer {
    private MONGO_URI = this.getEnvironment('MONGO_URI')

    public connectMongo() {
        connect(this.MONGO_URI as string)
        .then(()=> console.log('Connect database correctly'))
        .catch((error)=> console.error(error))
        
    }
}
