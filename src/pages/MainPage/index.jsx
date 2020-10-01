import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import Container from 'react-bootstrap/Container';

function MainPage() {
  return (
    <Container fluid>
      <Row style={{ justifyContent: 'center', marginTop: 15 }}>
        <Card text="dark" className="m-4">
          <Card.Header>
            Title
          </Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card text="dark" className="m-4">
          <Card.Header>
            Title
          </Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card text="dark" className="m-4">
          <Card.Header>
            Title
          </Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>

    </Container>
  );
}

export default MainPage;
