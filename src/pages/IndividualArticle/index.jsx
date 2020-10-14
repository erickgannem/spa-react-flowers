import React from 'react';
import PropTypes from 'prop-types';

function IndividualArticle({ params }) {
  const { name } = params;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

IndividualArticle.defaultProps = {
  params: PropTypes.func,
  name: PropTypes.func,
};
IndividualArticle.propTypes = {
  params: () => {},
  name: () => {},
};

export default IndividualArticle;
