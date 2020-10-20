import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const FormSwitch = React.forwardRef((props, ref) => (
  <div className="custom-control custom-switch">
    <input
      type="checkbox"
      className="custom-control-input"
      id="customSwitches"
      ref={ref}
      defaultChecked={props.available === 'on'}
    />
    <label className="custom-control-label" htmlFor="customSwitches" />
  </div>
));

FormSwitch.defaultProps = {
  available: '',
};

FormSwitch.propTypes = {
  available: PropTypes.string,
};

export default FormSwitch;
