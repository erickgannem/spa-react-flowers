async function fetchArticles(loadingDispatch, errorDispatch, articlesDispatch) {
  loadingDispatch({ type: 'SET_LOADING' });
  try {
    const response = await fetch('http://lapalabra.free.fr/api/articles/', {
      method: 'GET',
    });
    const { data } = await response.json();
    articlesDispatch({ type: 'FETCH_ARTICLES', payload: { articles: data.articles } });
    loadingDispatch({ type: 'UNSET_LOADING' });
  } catch (err) {
    errorDispatch({ type: 'SET_ERROR', payload: { error: err } });
    loadingDispatch({ type: 'UNSET_LOADING' });
  }
}

export default fetchArticles;
