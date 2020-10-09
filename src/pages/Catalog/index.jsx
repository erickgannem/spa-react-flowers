import React from 'react';

import {
  Col, Row, Pagination, PageItem,
} from 'react-bootstrap';

import CatalogItem from '../../components/CatalogItem';

const totalPages = (itemsArr) => {
  const itemsCount = itemsArr ? itemsArr.length : 1;
  return Math.ceil(itemsCount / 3);
};

function Catalog() {
  const [activePage, setActivePage] = React.useState(1);
  const [articles, setArticles] = React.useState({});

  React.useEffect(() => {
    const fetchItems = async () => {
      const headers = new Headers({
        authorization: `Bearer ${localStorage.getItem('@jdm_user_token')}`,
      });
      try {
        const response = await fetch('http://lapalabra.free.fr/api/articles/', {
          method: 'GET',
          headers,
        });
        const { data } = await response.json();

        setArticles(data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, []);

  const setPaginationBoxes = React.useCallback((quantity) => {
    const items = [];
    for (let number = 1; number <= quantity; number += 1) {
      items.push(
        <PageItem key={number} active={number === activePage} onClick={() => setActivePage(number)}>
          {number}
        </PageItem>,
      );
    }
    return items;
  }, [activePage]);
  const items = setPaginationBoxes(totalPages());

  return (
    <>
      <Row noGutters className="justify-content-center align-items-center">

        <Col xl={3} lg={3} md={3}>
          <CatalogItem
            key={1}
            name="Planta #1"
            available
          />
        </Col>

      </Row>

      <Row noGutters className="justify-content-center align-items-center">
        <Col xl={3} lg={3} md={3}>

          <Pagination size="sm" className="justify-content-center align-items-center">
            <Pagination.Prev onClick={() => activePage > 1 && setActivePage(activePage - 1)} />
            {items}
            <Pagination.Next onClick={() => activePage < items.length && setActivePage(activePage + 1)} />
          </Pagination>
        </Col>
      </Row>
    </>
  );
}

export default Catalog;
