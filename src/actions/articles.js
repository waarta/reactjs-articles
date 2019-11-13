import {
  GET_ALL_ARTICLES_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  ADD_ARTICLE_SUCCESS
} from "./constants";
import { ARTICLES } from "../fixtures/articles";

export const getAllArticles = () => async dispatch => {
  dispatch({
    type: GET_ALL_ARTICLES_SUCCESS,
    articles: ARTICLES
  });
};

export const deleteArticle = (
  allArticles,
  articleToRemove
) => async dispatch => {
  let newArticles = [...allArticles];
  const index = newArticles.indexOf(articleToRemove);
  index > -1 && newArticles.splice(index, 1);

  dispatch({
    type: DELETE_ARTICLE_SUCCESS,
    articles: newArticles
  });
};
export const addArticle = article => async dispatch => {
  dispatch({
    type: ADD_ARTICLE_SUCCESS,
    article
  });
};
