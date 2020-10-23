/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { IoMdDownload } from 'react-icons/io';
import './index.css';

function Dropzone({ onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="d-flex flex-column align-items-center app-dropzone-container mb-3 p-4" {...getRootProps()}>
      <IoMdDownload size={48} />
      <input {...getInputProps()} />
      {
          isDragActive
            ? <p className="m-0 text-dark">Coloca los archivos aqui</p>
            : <p className="m-0 text-dark">Arrastra los archivos aqui  o click para para seleccionarlos</p>
        }
    </div>
  );
}

Dropzone.defaultProps = {
  onDrop: () => {},
};
Dropzone.propTypes = {
  onDrop: PropTypes.func,
};

export default Dropzone;
