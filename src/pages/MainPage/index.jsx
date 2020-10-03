import React from 'react';

import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CItem from '../../components/CItem';

function MainPage() {
  return (
    <Container fluid>
      <Row noGutters className="justify-content-center align-items-center">
        <Col lg="auto" sm="auto" xs="auto">
          <CardDeck>
            <CItem name="Planta #1" fromDate="24/09" />
            <CItem name="Planta #2" fromDate="01/10" />
            <CItem name="Planta #3" fromDate="24/11" />
            <CItem name="Planta #4" fromDate="12/09" />
          </CardDeck>
        </Col>
      </Row>

    </Container>
  );
}

export default MainPage;
