import React from 'react';
import PropTypes from 'prop-types';

import { Card, Badge } from 'react-bootstrap';

function CatalogItem(props) {
  const {
    name, description, price, image, available,
  } = props;
  return (
    <Card text="dark" className="m-3" style={{ minHeight: 425 }}>
      <Badge
        variant="primary"
        pill
        style={{
          position: 'absolute', right: -10, top: -10, padding: 7,
        }}
      >
        {available === 'on' ? 'Disponible' : 'No Disponible'}
      </Badge>
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {price}
          {' '}
          Bs
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

CatalogItem.defaultProps = {
  name: 'Planta',
  description: 'Breve descripción de esta planta...',
  price: 0,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROJGo_BDmE1BQXej-UemTXxZG6RkDsA95ZnA&usqp=CAU',
  available: false,
};
CatalogItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  available: PropTypes.string,
};

export default CatalogItem;
