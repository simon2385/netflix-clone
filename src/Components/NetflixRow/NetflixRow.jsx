import React from 'react';

import './NetflixRow.css';

const NetflixRow = ({ wideImage, title }) => {
  const imageType = wideImage
    ? 'images/sample-poster.jpg'
    : 'images/sample.jpg';
  return (
    <React.Fragment>
      <div className="row">
        <h2>{title}</h2>
        <div className={'row__posters'}>
          <img
            className="row__poster row__posterLarge"
            src={imageType}
            alt="1"
          />
          <img
            className="row__poster row__posterLarge"
            src={imageType}
            alt="2"
          />
          <img
            className="row__poster row__posterLarge"
            src={imageType}
            alt="3"
          />
          <img
            className="row__poster row__posterLarge"
            src={imageType}
            alt="4"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NetflixRow;
