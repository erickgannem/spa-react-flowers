import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const FormSwitch = React.forwardRef((props, ref) => (
  <div className="custom-control custom-switch">
    <input
      type="checkbox"
      className="custom-control-input"
      value={props.available}
      defaultChecked={props.available === 'on'}
      id="customSwitches"
      ref={ref}
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
