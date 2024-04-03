"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const mongoose_1 = require("mongoose");
const baseSchema = new mongoose_1.Schema({
    dateCreated: {
        type: Date,
        required: true
    },
    dateUpdate: {
        type: Date,
        required: true
    },
});
exports.BaseModel = (0, mongoose_1.model)('base', baseSchema);
