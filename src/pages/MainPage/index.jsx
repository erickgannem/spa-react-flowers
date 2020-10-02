import React from 'react';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import CItem from '../../components/CItem';

function MainPage() {
  return (
    <Container fluid>
      <Row style={{ justifyContent: 'center', marginTop: 15 }}>
        <CItem />
        <CItem />
        <CItem />

      </Row>

    </Container>
  );
}

export default MainPage;
