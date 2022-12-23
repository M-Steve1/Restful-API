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
exports.ArticleStore = void 0;
const database_1 = __importDefault(require("../database"));
class ArticleStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM articles';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Could not get articles. Error: ${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM articles WHERE id=($1)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not get article ${id}. Error: ${err}`);
            }
        });
    }
    create(article) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'INSERT INTO articles (title, content) VALUES($1, $2) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [article.title, article.content]);
                const theArticle = result.rows[0];
                conn.release();
                return theArticle;
            }
            catch (err) {
                throw new Error(`Could not add article ${article.title}. Error: ${err}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM articles WHERE id=($1) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                const article = result.rows[0];
                conn.release();
                return article;
            }
            catch (err) {
                throw new Error(`Could not delete article. Error: ${err}`);
            }
        });
    }
}
exports.ArticleStore = ArticleStore;
