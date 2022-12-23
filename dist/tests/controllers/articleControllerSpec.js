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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
fdescribe('Testing article routers', () => {
    it('Expect route displaying all articles to return 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/articles');
        expect(response.statusCode).toBe(200);
    }));
    it('Expect to create a new article with 201 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/articles/create');
        expect(response.statusCode).toBe(201);
    }));
    it('Expect to return the specified article with 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/articles/1');
        expect(response.statusCode).toBe(200);
    }));
    it('Expect to delete the specified article with 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.delete('/articles/delete/2');
        expect(response.statusCode).toBe(200);
    }));
});
