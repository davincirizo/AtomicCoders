"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./routers/user.router");
const config_1 = require("./config/config");
const index_1 = require("../src/database/index");
class Server extends config_1.ConfigServer {
    constructor() {
        super();
        this.port = this.getNumberEnv('PORT');
        this.DB = new index_1.ConnectDB();
        this.app = (0, express_1.default)();
        this.configuration();
        this.DB.connectMongo();
        this.middlewares();
        this.routes();
    }
    configuration() {
        this.app.set('port', this.port);
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server Running ${this.app.get('port')}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.status(200).json({
                name: "Api Rest Listen"
            });
        });
        this.app.use('/api', new user_router_1.UserRouter().router);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
}
exports.Server = Server;
