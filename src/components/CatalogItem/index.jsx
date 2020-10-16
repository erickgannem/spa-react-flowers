import React from 'react';
import PropTypes from 'prop-types';

import {
  Card, Badge, Col,
} from 'react-bootstrap';

import SelectedArticleContext from '../../context/SelectedArticleContext';
import ModalContext from '../../context/ModalContext';

import './index.css';

function CatalogItem(props) {
  const {
    selectedArticleDispatch,
  } = React.useContext(SelectedArticleContext);
  const { setShowModal } = React.useContext(ModalContext);
  const {
    name, description, price, image, available,
  } = props;
  const cardClickHandler = () => {
    const articlePayload = {
      name, description, price, image, available,
    };
    selectedArticleDispatch({ type: 'SET_SELECTED_ARTICLE', payload: articlePayload });
    setShowModal(true);
  };
  return (

    <Col className="my-2 d-flex justify-content-start" xs={12} md={4}>
      <Card text="dark" className="app-card h-100" onClick={cardClickHandler} style={{ flex: 1 }}>
        <Badge
          className="app-badge"
          variant={available === 'on' ? 'primary' : 'danger'}
          pill
        >
          <span>{available === 'on' ? 'Disponible' : 'No Disponible'}</span>
        </Badge>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title as="h4" className="text-center">{name}</Card.Title>
          <Card.Text as="p" className="text-center">
            {description}
          </Card.Text>
          <Card.Text as="h3" className="text-center">
            Bs.
            {' '}
            {price}

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

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
