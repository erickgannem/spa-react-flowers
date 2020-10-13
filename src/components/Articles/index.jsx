import React from 'react';
import CatalogItem from '../CatalogItem';

const Articles = ({ articles }) => (
  articles.map((article) => (
    <CatalogItem
      key={article.name}
      name={article.name}
      available={article.active}
      description={article.description}
      price={article.price}
    />
  )));

export default Articles;
