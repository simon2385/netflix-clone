import React from 'react';
import NetflixAppBar from '../../layout/NetflixAppBar/NetflixAppBar';
import NetflixHeader from '../../layout/NetflixHeader/NetflixHeader';
import NetflixFooter from '../../layout/NetflixFooter/NetflixFooter';
import NetflixRow from '../NetflixRow/NetflixRow';

import './NetflixApp.css';

const NetflixApp = () => {
  const liensNavBar = ['Accuel', 'Séries', 'Films', 'Nouvautés', 'Ma Liste'];

  return (
    <div>
      <NetflixAppBar liens={liensNavBar} />
      <NetflixHeader />
      <NetflixRow wideImage={false} title={'Films Netflix'} />
      <NetflixRow wideImage={true} title={'Série Netflix'} />
      <NetflixFooter />
    </div>
  );
};
export default NetflixApp;
