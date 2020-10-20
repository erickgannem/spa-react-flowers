import React from 'react';
import './index.css';

function FormSwitch({ available }) {
  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitches"
        readOnly
        checked={available === 'on'}
      />
      <label className="custom-control-label" htmlFor="customSwitches">{available}</label>
    </div>
  );
}
export default FormSwitch;
