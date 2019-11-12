import { GET_ALL_ARTICLES_SUCCESS } from "../actions/constants";

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
    default:
      return state;
  }
};

export default articles;
