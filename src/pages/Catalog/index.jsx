import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

const calculatePages = (itemsArr) => {
  const itemsCount = itemsArr.length;
  return Math.ceil(itemsCount / 3);
};

const createPages = (quantity) => {
  for (let i = 0; i < quantity; i += 1) {

  }
};

function Catalog() {
  return (
    <Row noGutters className="justify-content-center align-items-center">
      <Col xl={3} lg={3} md={3}>
        {/* {
            DUMMY_ITEMS.map((item) => (
              <CatalogItem
                key={item.name}
                name={item.name}
                available={item.available}
              />
            ))
          } */}
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
        <Col />
      </Col>
    </Row>

  );
}

export default Catalog;
