import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import ReactPlayer from 'react-player/youtube';

function VideoPlayer({ videoUrl }) {
  return (
    <ReactPlayer url={videoUrl} />
  );
}

VideoPlayer.defaultProps = {
  videoUrl: '',
};
VideoPlayer.propTypes = {
  videoUrl: PropTypes.string,
};

export default VideoPlayer;
