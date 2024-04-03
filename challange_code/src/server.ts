import express,{Express} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { PORT } from '../config';
import { connectDB } from './database';
import { routes } from './routes';


export class Server{
    private app:Express;

    constructor(){
        this.app = express()
        this.configuration()
        connectDB()
        this.middlewares()
        this.routes()
    }
    configuration(){        
        this.app.set('port', PORT)
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
        this.app.use('/api/auth',routes.routerAuth)

    }

    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
    }
}