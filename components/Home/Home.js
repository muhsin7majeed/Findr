import React from 'react';
import {Container} from 'native-base';
import Popular from '../Popuplar/Popular';
import SearchNav from '../Navs/SearchNav';
import TopNav from '../Navs/TopNav';

const Home = props => {
  return (
    <>
      <Container>
        <TopNav {...props} />
        <Popular {...props} />
      </Container>
      <SearchNav {...props} />
    </>
  );
};

export default Home;
