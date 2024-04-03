"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
const user_service_1 = require("../services/user.service");
const http_response_1 = require("../response/http.response");
class UserControllers {
    constructor(ServiceUser = new user_service_1.userServices(), httpResponse = new http_response_1.HttpResponse()) {
        this.ServiceUser = ServiceUser;
        this.httpResponse = httpResponse;
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.ServiceUser.index();
                return this.httpResponse.OK(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    getUsersById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.ServiceUser.findUserById(id);
                if (data === null) {
                    return this.httpResponse.NotFound(res, 'Not Register Found');
                }
                return this.httpResponse.OK(res, data);
            }
            catch (error) {
                this.httpResponse.Error(res, error);
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.ServiceUser.create(req.body);
                this.httpResponse.OK(res, data);
            }
            catch (error) {
                this.httpResponse.Error(res, error);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.ServiceUser.update(id, req.body);
                this.httpResponse.OK(res, data);
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.ServiceUser.delete(id);
                this.httpResponse.OK(res, data);
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
exports.UserControllers = UserControllers;
