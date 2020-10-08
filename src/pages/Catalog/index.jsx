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
  { name: 'Planta #6', available: true },
];

function Catalog() {
  const [active, setActive] = React.useState(0);
  return (
    <Row noGutters className="justify-content-center align-items-center">
      <Col lg="auto" sm="auto" xs="auto">
        <CardDeck>
          {
            DUMMY_ITEMS.map((item) => (
              <CatalogItem
                key={item.name}
                name={item.name}
                available={item.available}
              />
            ))
          }
        </CardDeck>
      </Col>
    </Row>

  );
}

export default Catalog;
