import React from 'react';

import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';

import CItem from '../../components/CItem';

function MainPage() {
  return (
    <Container fluid>
      <CardDeck>
        <CItem name="Planta #1" fromDate="24/09" />
        <CItem name="Planta #2" fromDate="01/10" />
        <CItem name="Planta #3" fromDate="24/11" />
        <CItem name="Planta #4" fromDate="12/09" />
      </CardDeck>

    </Container>
  );
}

export default MainPage;
