import { GET_ALL_ARTICLES } from "../actions/constants";

const initialState = {
  articles: []
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES:
      return { ...state.articles };
    default:
      return state;
  }
};

export default articles;
