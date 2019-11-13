import {
  GET_ALL_ARTICLES_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  ADD_ARTICLE_SUCCESS
} from "../actions/constants";

const initialState = {
  articles: []
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles.concat(action.articles)]
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [...action.articles]
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [...state.articles.concat(action.article)]
      };
    default:
      return state;
  }
};

export default articles;
