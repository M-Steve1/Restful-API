import express from 'express';
import { ArticleStore, Article } from '../models/article';

const store = new ArticleStore();

export const showAll = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const articles = await store.index();
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const findByID = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const article = await store.show(id);
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createArticle = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { title, content } = req.body;
    const article: Article = {
      title: title,
      content: content
    };
    const new_article = await store.create(article);
    res.status(201).json(new_article);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteArticle = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const deletedArticle = await store.delete(id);
    res.status(200).json(deletedArticle);
  } catch (error) {
    res.status(400).json(error);
  }
};
