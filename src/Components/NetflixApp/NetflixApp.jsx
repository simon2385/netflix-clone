import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typhography from '@mui/material/Typography';
import './NetflixApp.css';

const NetflixApp = () => {
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: 'transparent',
    boxDhadow: 'none',
  });

  React.useEffect(() => {
    const onScroll = e => {
      e.target.documentElement.scrollTop >= 100
        ? setAppBarStyle({
            background: '#111',
            transition: 'background .5s ease-out',
            boxShadow: 'none',
          })
        : setAppBarStyle({
            background: 'transparent',
            transition: 'background .5s ease-out',
            boxShadow: 'none',
          });
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  const margin10 = { margin: '10px' };

  const liens = ['Accuel', 'Séries', 'Films', 'Nouvautés', 'Ma Liste'];
  return (
    <div>
      <AppBar style={appBarStyle}>
        <Toolbar>
          <img
            className="nav__logo"
            src="images/netflix-logo.png"
            height="20px"
            alt="Netflix Logo"
          />
          {liens.map((lien, i) => (
            <Typhography style={margin10} variant="h6" key={i}>
              {lien}
            </Typhography>
          ))}
          <img
            style={{ marginLeft: 'auto' }}
            src="images/netflix-avatar.png"
            height="20px"
            alt="Netflix-avatar"
          />
        </Toolbar>
      </AppBar>

      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">La casa de papel</h1>
          <div className="banner__buttons">
            <button className="banner__button banner__buttonplay">
              Lecture
            </button>
            <button className="banner__button banner__buttonInfo">
              Ajter à ma liste
            </button>
          </div>
          <h1 className="synopsis">
            Le Professeur recrute une jeune braqueuse et sept autres criminels
            en vue d'un cambriolage grandiose ciblant la Maison royale de la
            Monnaie d'Espagne
          </h1>
        </div>
      </header>

      <div className="row">
        <h2>Films Netflix</h2>
        <div className="row__posters">
          <img
            className="row__poster row__posterLarge"
            src="images/sample.jpg"
            alt="1"
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample1.jpg"
            alt="2"
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample.jpg"
            alt="3"
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample1.jpg"
            alt="4"
          />
        </div>
      </div>

      <div className="row">
        <h2>Série Netflix</h2>
        <div className="row__posters">
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster.jpg"
            alt="1"
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster1.jpg"
            alt="2"
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster.jpg"
            alt="3"
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster1.jpg"
            alt="4"
          />
        </div>
      </div>

      <footer className="footer">2021 - Netflix Clone</footer>
    </div>
  );
};
export default NetflixApp;
