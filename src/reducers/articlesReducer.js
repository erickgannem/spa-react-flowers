export default function articlesReducer(state, action) {
  console.log('articlesreducer');
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return {
        articles: [...action.payload.articles],
      };
    default:
      return state;
  }
}
