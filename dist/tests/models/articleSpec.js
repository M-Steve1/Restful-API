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
const article_1 = require("../../models/article");
const store = new article_1.ArticleStore();
describe('Article model', () => {
    it('Should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('Should have create method', () => {
        expect(store.create).toBeDefined();
    });
    it('Should have show method', () => {
        expect(store.show).toBeDefined();
    });
    it('Should have delete method', () => {
        expect(store.delete).toBeDefined();
    });
    it('Create method should add a new article', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            title: 'cors',
            content: 'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
        });
        expect(result).toEqual({
            id: 1,
            title: 'cors',
            content: 'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
        });
    }));
    it('Should return a list all articles', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        expect(result).toEqual([
            {
                id: 1,
                title: 'cors',
                content: 'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
            }
        ]);
    }));
    it('Should find article by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(1);
        expect(result).toEqual({
            id: 1,
            title: 'cors',
            content: 'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
        });
    }));
    it('Should delete article with the ID provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.delete(3);
        expect(result).toEqual({
            id: 3,
            title: 'cors',
            content: 'Cors means Cross Origin Resource Sharing. If an application front-end and back-end does not have the same URL domain then the client domain will have to be white-listed in Cors API in order for it to have access.'
        });
    }));
});
