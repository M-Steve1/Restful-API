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
exports.deleteArticle = exports.createArticle = exports.findByID = exports.showAll = void 0;
const article_1 = require("../models/article");
const store = new article_1.ArticleStore();
const showAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield store.index();
        res.status(200).json(articles);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.showAll = showAll;
const findByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const article = yield store.show(id);
        res.status(200).json(article);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.findByID = findByID;
const createArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = {
        title: 'RESTful API',
        content: 'RESTful API means Representational State Transfer(ful) Application Interface. RESTful API provides a well-organized, industry standard and predictable way to structure our API endpoint'
    };
    const new_article = yield store.create(article);
    try {
        res.status(201).json(new_article);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.createArticle = createArticle;
const deleteArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const deletedArticle = yield store.delete(id);
        res.status(200).json(deletedArticle);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.deleteArticle = deleteArticle;
