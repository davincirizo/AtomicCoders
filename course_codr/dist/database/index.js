"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../config/config");
class ConnectDB extends config_1.ConfigServer {
    constructor() {
        super(...arguments);
        this.MONGO_URI = this.getEnvironment('MONGO_URI');
    }
    connectMongo() {
        (0, mongoose_1.connect)(this.MONGO_URI)
            .then(() => console.log('Connect database correctly'));
    }
}
exports.ConnectDB = ConnectDB;
