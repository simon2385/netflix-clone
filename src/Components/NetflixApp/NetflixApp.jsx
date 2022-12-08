import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typhography from '@mui/material/Typography';
import './NetflixApp.css'

const NetflixApp = () => {
  const liens = ['Accuel', 'Séries', 'Films', 'Nouvautés', 'Ma Liste'];
  return (
    <div>
      <div>
        <img src="images/netflix-logo.png" height="20px" alt="Netflix Logo" />
        {liens.map((lien, i) => (
          <a href="/" key={i}>
            {lien}
          </a>
        ))}
        <img
          src="images/netflix-avatar.png"
          height="20px"
          alt="Netflix-avatar"
        />
      </div>

      <header>
        <div>
          <h1>La casa de papel</h1>
          <div>
            <button>Lecture</button>
            <button>Ajter à ma liste</button>
          </div>
          <h1>
            Le Professeur recrute une jeune braqueuse et sept autres criminels
            en vue d'un cambriolage grandiose ciblant la Maison royale de la
            Monnaie d'Espagne
          </h1>
        </div>
      </header>

      <div>
        <h2>Films Netflix</h2>
        <div>
          <img src="images/sample.jpg" alt="1" height="250px" />
          <img src="images/sample1.jpg" alt="2" height="250px" />
          <img src="images/sample.jpg" alt="3" height="250px" />
          <img src="images/sample1.jpg" alt="4" height="250px" />
        </div>
      </div>

      <div>
        <h2>Série Netflix</h2>
        <div>
          <img src="images/sample-poster.jpg" alt="1" height="300px" />
          <img src="images/sample-poster1.jpg" alt="2" height="300px" />
          <img src="images/sample-poster.jpg" alt="3" height="300px" />
          <img src="images/sample-poster1.jpg" alt="4" height="300px" />
        </div>
      </div>

      <footer>2021 - Netflix Clone</footer>
    </div>
  );
};
export default NetflixApp;
