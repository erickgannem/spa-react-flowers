async function fetchArticles(feedbackDispatch, articlesDispatch) {
  feedbackDispatch({ type: 'SET_LOADING' });

  try {
    const response = await fetch('http://lapalabra.free.fr/api/articles/', {
      method: 'GET',
    });
    const { data } = await response.json();
    articlesDispatch({ type: 'FETCH_ARTICLES', payload: { articles: data.articles } });
    feedbackDispatch({ type: 'UNSET_LOADING' });
  } catch (err) {
    feedbackDispatch({ type: 'SET_ERROR', payload: { error: err } });
    feedbackDispatch({ type: 'UNSET_LOADING' });
  }
}

export default fetchArticles;
