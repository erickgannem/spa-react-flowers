import React from 'react';
import PropTypes from 'prop-types';

import { Card, Badge } from 'react-bootstrap';

import { useLocation } from 'wouter';

import './index.css';

function CatalogItem(props) {
  const [, setLocation] = useLocation();
  const {
    name, description, price, image, available,
  } = props;
  const cardClickHandler = () => {
    setLocation(`plantas/${name}`);
  };
  return (

    <Card text="dark" className="mb-4 app-card box-shadow" as="span" onClick={cardClickHandler}>
      <Badge
        className="app-badge"
        variant="primary"
        pill

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
