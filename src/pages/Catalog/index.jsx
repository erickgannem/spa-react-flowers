import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CatalogItem from '../../components/CatalogItem';

function Catalog() {
  return (
    <Row noGutters className="justify-content-center align-items-center">
      <Col lg="auto" sm="auto" xs="auto">
        <CardDeck>
          <CatalogItem name="Planta #1" available="Disponible" />
          <CatalogItem name="Planta #2" available="No Disponible" />
          <CatalogItem name="Planta #3" available="Disponible" />
        </CardDeck>
      </Col>
    </Row>

  );
}

export default Catalog;
