import express from 'express';
import {
  createArticle,
  deleteArticle,
  findByID,
  showAll
} from '../controllers/articleController';

const articleRouter = express.Router();

articleRouter.get('/articles', showAll);
articleRouter.post('/articles/create', createArticle);
articleRouter.get('/articles/:id', findByID);
articleRouter.delete('/articles/delete/:id', deleteArticle);

export default articleRouter;
