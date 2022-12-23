"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articleController_1 = require("../controllers/articleController");
const articleRouter = express_1.default.Router();
articleRouter.get('/articles', articleController_1.showAll);
articleRouter.post('/articles/create', articleController_1.createArticle);
articleRouter.get('/articles/:id', articleController_1.findByID);
articleRouter.delete('/articles/delete/:id', articleController_1.deleteArticle);
exports.default = articleRouter;
