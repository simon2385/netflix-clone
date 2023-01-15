import React from 'react';
import NetflixAppBar from '../../layout/NetflixAppBar/NetflixAppBar';
import NetflixHeader from '../../layout/NetflixHeader/NetflixHeader';
import NetflixFooter from '../../layout/NetflixFooter/NetflixFooter';
import NetflixRow from '../NetflixRow/NetflixRow';
import { clientApi } from '../../utils/clientApi';
import {
  getRandomIntInclusive,
  getRandomType,
  getRandomId,
} from '../../utils/helper';
import { apiKey, lang } from '../../config';

import './NetflixApp.css';

import axios from 'axios';

const NetflixApp = () => {
  const [type] = React.useState(getRandomType());

  const defaultMovieId = getRandomId(type);

  const [headerMovie, setHeaderMovie] = React.useState(defaultMovieId);

  React.useEffect(() => {
    clientApi(`${type}/${defaultMovieId}`)
      .then(response => setHeaderMovie(response))
      .catch(err => console.error(err));
    // eslint-disable-next-line
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
