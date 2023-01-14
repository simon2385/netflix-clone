import React from 'react';
import NetflixAppBar from '../../layout/NetflixAppBar/NetflixAppBar';
import NetflixHeader from '../../layout/NetflixHeader/NetflixHeader';
import NetflixFooter from '../../layout/NetflixFooter/NetflixFooter';
import NetflixRow from '../NetflixRow/NetflixRow';
import './NetflixApp.css';

import axios from 'axios';

const NetflixApp = () => {
  const defaultMovieId = '71446';
  const [headerMovie, setHeaderMovie] = React.useState(defaultMovieId);
  const apiKey = '8c9be3a874cc17880b1a805b0ae9d862';
  const lang = 'en-usa';
  const type = 'tv';
  const url = `https://api.themoviedb.org/3/${type}/${defaultMovieId}?api_key=${apiKey}&language=${lang}`;

  React.useEffect(() => {
    axios
      .get(url)
      .then(response => setHeaderMovie(response))
      .catch(err => console.error(err));
  }, []);

  console.log(headerMovie);
  const liensNavBar = ['Accuel', 'Séries', 'Films', 'Nouvautés', 'Ma Liste'];

  return (
    <div>
      <NetflixAppBar liens={liensNavBar} />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow wideImage={false} title={'Films Netflix'} />
      <NetflixRow wideImage={true} title={'Série Netflix'} />
      <NetflixFooter />
    </div>
  );
};
export default NetflixApp;
