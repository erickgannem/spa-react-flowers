import React from 'react';
import Col from 'react-bootstrap/Col';
import CatalogItem from '../CatalogItem';

const Articles = ({ articles }) => (
  articles.map((article) => (
    <React.Fragment key={article.name}>
      <Col xl={3} lg={3} md={3}>
        <CatalogItem
          key={article.name}
          name={article.name}
          available={article.active}
          description={article.description}
          price={article.price}
        />
      </Col>
    </React.Fragment>

  )));

export default Articles;
