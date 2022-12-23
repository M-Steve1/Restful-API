"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("./config"));
const { host, envDB, user, password, port, testDB, env } = config_1.default;
let client;
if (env === 'test') {
    client = new pg_1.Pool({
        host: host,
        database: testDB,
        user: user,
        password: password,
        port: port
    });
}
if (env === 'env') {
    client = new pg_1.Pool({
        host: host,
        database: envDB,
        user: user,
        password: password,
        port: port
    });
}
exports.default = client;
