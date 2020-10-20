async function fetchArticles(loadingDispatch, errorDispatch, articlesDispatch) {
  loadingDispatch({ type: 'SET_LOADING' });
  try {
    const response = await fetch('http://lapalabra.free.fr/api/articles/', {
      method: 'GET',
    });
    const { data } = await response.json();
    const sortedArticles = data.articles.sort((a, b) => {
      if (a.active < b.active) {
        return 1;
      }
      if (a.active > b.active) {
        return -1;
      }
      return 0;
    });
    articlesDispatch({ type: 'FETCH_ARTICLES', payload: { articles: sortedArticles } });
    loadingDispatch({ type: 'UNSET_LOADING' });
  } catch (err) {
    errorDispatch({ type: 'SET_ERROR', payload: { error: err } });
    loadingDispatch({ type: 'UNSET_LOADING' });
  }
}

export default fetchArticles;
