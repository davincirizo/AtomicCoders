import express,{Express} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { UserRouter } from './routers/user.router';
import { ConfigServer } from './config/config';
import { ConnectDB } from '../src/database/index'




export class Server extends ConfigServer{
    private app:Express;
    private port: number = this.getNumberEnv('PORT')
    private DB = new ConnectDB()

    constructor(){
        super()
        this.app = express()
        this.configuration()
        this.DB.connectMongo()
        this.middlewares()
        this.routes()
    }
    configuration(){        
        this.app.set('port', this.port)
    }
    listen(){
        this.app.listen(this.app.get('port') , ()=>{
            console.log(`Server Running ${this.app.get('port')}`)
        })
    }

    routes(){
        this.app.get('/',(req,res) =>{
            res.status(200).json({
                name:"Api Rest Listen"
            })
        })
        this.app.use('/api',new UserRouter().router)

    }

    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
    }
}