import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function CItem(props) {
  const {
    name, description, price, image, fromDate,
  } = props;
  return (
    <Card text="dark" className="m-3">
      <Badge
        variant="primary"
        pill
        style={{
          position: 'absolute', right: -10, top: -10, padding: 7,
        }}
      >
        A partir del:
        {' '}
        {fromDate}
      </Badge>
      <Card.Img src={image} fluid="true" />
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

CItem.defaultProps = {
  name: 'Planta',
  description: 'Breve descripción de esta planta...',
  price: 0,
  image: 'https://i.etsystatic.com/17013953/r/il/5ff4bb/1463928323/il_570xN.1463928323_qqar.jpg',
  fromDate: '23/09',
};
CItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  fromDate: PropTypes.string,
};

export default CItem;
