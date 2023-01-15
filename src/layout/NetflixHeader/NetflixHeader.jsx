import React from 'react';
import { imagePathOriginal, TYPE_MOVIE} from '../../config';

import './NetflixHeader.css';

const NetflixHeader = ({ movie, type = TYPE_MOVIE }) => {
  const title = type === TYPE_MOVIE ? movie?.title : movie?.name;
  const imageUrl = `${imagePathOriginal}${movie?.backdrop_path}`;
  const banner = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    objectFit: 'contain',
    height: '448px',
  };

  if (!movie) <></>;

  if (movie) {
    return (
      <>
        <header style={banner}>
          <div className="banner__contents">
            <h1 className="banner__title">{title ?? '...'}</h1>
            <div className="banner__buttons">
              <button className="banner__button banner__buttonplay">
                Lecture
              </button>
              <button className="banner__button banner__buttonInfo">
                Ajter à ma liste
              </button>
            </div>
            <h1 className="synopsis">{movie?.overview ?? '...'}</h1>
          </div>
        </header>
      </>
    );
  }
};

export default NetflixHeader;
