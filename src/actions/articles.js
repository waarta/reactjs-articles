import { GET_ALL_ARTICLES_SUCCESS } from "./constants";
import { ARTICLES } from "../fixtures/articles";

export const getAllArticles = () => async dispatch => {
  dispatch({
    type: GET_ALL_ARTICLES_SUCCESS,
    articles: ARTICLES
  });
};
