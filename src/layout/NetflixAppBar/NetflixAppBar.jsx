import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typhography from '@mui/material/Typography';

const NetflixAppBar = ({liens}) => {
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

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default NetflixAppBar;
