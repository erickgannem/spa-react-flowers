import React from 'react';

import {
  Col, Row, Pagination, PageItem,
} from 'react-bootstrap';

import CatalogItem from '../../components/CatalogItem';

// dummy data
const DUMMY_ITEMS = [
  { name: 'Planta #1', available: false },
  { name: 'Planta #2', available: true },
  { name: 'Planta #3', available: true },
  { name: 'Planta #4', available: true },
  { name: 'Planta #5', available: false },
  { name: 'Planta #6', available: false },
  { name: 'Planta #7', available: true },
  { name: 'Planta #8', available: true },
  { name: 'Planta #9', available: true },
  { name: 'Planta #10', available: true },
  { name: 'Planta #11', available: true },
  { name: 'Planta #12', available: false },
  { name: 'Planta #13', available: true },
  { name: 'Planta #14', available: true },
  { name: 'Planta #15', available: false },
  { name: 'Planta #16', available: false },
  { name: 'Planta #17', available: false },
  { name: 'Planta #18', available: false },
  { name: 'Planta #19', available: false },
  { name: 'Planta #20', available: false },
  { name: 'Planta #21', available: false },
  { name: 'Planta #22', available: false },
];

const totalPages = (itemsArr) => {
  const itemsCount = itemsArr.length;
  return Math.ceil(itemsCount / 3);
};

const generateDataSet = (totalPages, itemsArr) => {

};

function Catalog() {
  const [activePage, setActivePage] = React.useState(1);

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

  const items = setPaginationBoxes(totalPages(DUMMY_ITEMS));

  return (
    <>
      <Row noGutters className="justify-content-center align-items-center">
        {generateDataSet(totalPages(DUMMY_ITEMS), DUMMY_ITEMS)}
        {/* <Col xl={3} lg={3} md={3}>
          <CatalogItem
            key={1}
            name="Planta #1"
            available
          />
        </Col>
        <Col xl={3} lg={3} md={3}>
          <CatalogItem
            key={2}
            name="Planta #2"
            available
          />
          <Col />
        </Col>
        <Col xl={3} lg={3} md={3}>
          <CatalogItem
            key={3}
            name="Planta #3"
            available
          />
        </Col> */}
      </Row>
      <Row noGutters className="justify-content-center align-items-center">
        <Col xl={3} lg={3} md={3}>
          <Pagination size="lg" className="justify-content-center align-items-center">
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
