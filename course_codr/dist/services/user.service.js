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
exports.userServices = void 0;
const user_model_1 = require("../models/user.model");
class userServices {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.UserModel.find({}, '-password');
        });
    }
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield user_model_1.UserModel.findById(id);
            console.log(data);
            return data;
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            body.dateCreated = new Date();
            body.dateUpdate = new Date();
            return yield user_model_1.UserModel.create(body);
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            body.dateUpdate = new Date();
            const user = yield user_model_1.UserModel.findByIdAndUpdate(id, body, { new: true });
            return user;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.UserModel.findByIdAndDelete(id);
            return "Delete Correctly";
        });
    }
}
exports.userServices = userServices;
